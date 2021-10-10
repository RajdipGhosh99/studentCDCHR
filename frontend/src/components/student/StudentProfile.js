import Button from '@material-ui/core/Button';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';import profile_image_url from "../../images/default1.png";
import axios from 'axios';
import {currentUserDataContext} from "../../App";
import "../../css/StudentProfile.css";



const StudentProfile = () => {

    const {currentUserData, setCurrentUserData}  = useContext(currentUserDataContext);

    const [inputFieldsData, setInputFieldsData] = useState({
        addSkill: ""
    });


    useEffect( async ()=>{
      fetchUserDataFromServer();
    }, []);

    const fetchUserDataFromServer = async ()=>{
      const apiUrl = `http://localhost:8000/student/search/${currentUserData.userId}`;
      try {
        const serverResponse = await axios.get(apiUrl, {withCredentials: true});
        if(serverResponse.status == 200){
          console.log(serverResponse);
          setCurrentUserData({...currentUserData, skills: serverResponse.data.skills});
        }
      } catch (error) {

      }
    }




    const inputFieldChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputFieldsData({...inputFieldsData, [fieldName]: fieldValue});

    }

    const {addSkill} = inputFieldsData;

    const addSkillClickButton = async () => {
        const apiUrl = `http://localhost:8000/student/skills/update/${currentUserData.userId}`;
        const data = {skill: addSkill};
        try {
            const serverResponse = await axios.put(apiUrl, data);
            fetchUserDataFromServer();
            setInputFieldsData({addSkill: ""});
        } catch (error) {
            alert("Skill not update "+error.response.data);
        }

    }

    return(
        <>
        <section className="myprofile_root_div d-flex justify-content-center">
        <div className="text-center bg-light header_div_style p-4">
           <img src={profile_image_url} alt="" className="myprofile_profile_pic" />
          
           <input accept="image/*" id="icon-button-file" type="file"  style={{display: "none"}} name="profile_image" />
              <label htmlFor="icon-button-file">
                <IconButton color="secondary" aria-label="upload picture" component="span" >
                <Tooltip title="Change Profile Picture">
                  <CameraAltIcon className="myprofile_camera_icon"   data-toggle="modal" data-target="#exampleModal"/>
                  </Tooltip>
                </IconButton>
              </label>
           <h2 className="myprofile_user_name">{currentUserData.name}</h2>
           
           <p>Branch, Course</p>
           <p style={{textAlign: "start"}}>
           <b>Carrier Objective: </b> <br/> A Career Objective or a Resume Objective is essentially a heading statement that describes your professional goals in two to three sentences. Employers looking to hire an employee for a position tend to seek candidates that are driven enough to understand what they want
           </p>

           <p style={{textAlign: "start"}}><b>Skills <EditIcon className="edit_profile_icon"   data-toggle="modal" data-target="#exampleModalCenter" /></b> </p>
           <div className="row mt-0">
           {
            currentUserData.skills.map((skill, index)=>{
              return <div className="col-3 skill_div" key={index}>{skill}</div>
            })
           }
            
            </div>


             {/* modal */}
          <div className="modal fade text-start" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLongTitle">Edit Skills</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body">
             <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Add Skills</label>
               <TextField
               onChange={inputFieldChange}
               name="addSkill"
               value={addSkill}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter Skills"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>
             </div>
             <div className="modal-footer d-flex justify-content-start align-items-center">
             <div>
             <button type="button" className="btn btn-secondary" data-dismiss="modal"  >Close</button>
             </div>
               <div>
               <button type="button" className="btn btn-primary update_profile_button" onClick={addSkillClickButton} ><SaveIcon />Add</button>
               </div>
               <div>
               </div>
               
             </div>
           </div>
         </div>
         </div>

         {/* modal */}

        {/* <Button variant="contained" color="secondary" className="update_profile_button"  data-toggle="modal" data-target="#exampleModalCenter"  startIcon={<EditIcon />} >
         Edit Profile
       </Button> */}
         </div>
        </section>
        </>
    );
}


export default StudentProfile;