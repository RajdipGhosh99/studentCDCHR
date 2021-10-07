import Button from '@material-ui/core/Button';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import profile_image_url from "../../images/default_hr.png";
import axios from 'axios';
import {currentUserDataContext} from "../../App";
import "../../css/HrProfile.css";



const HrProfile = () => {

  const {currentUserData, setCurrentUserData}  = useContext(currentUserDataContext);
  const [inputFieldsData, setInputFieldsData] = useState({
    addSkill: ""
});
  const [hrData, setHrData] = useState({});

  const fetchHrDataFromServer = async () => {
    //Featch HR data from server
    const apiUrl = `http://localhost:8000/hr/search/${currentUserData.userId}`;
    try {
      const serverResponse = await axios.get(apiUrl);
      if(serverResponse.status == 200){
        console.log(serverResponse.data);
        setHrData(serverResponse.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useState(()=>{
    fetchHrDataFromServer();
  }, []);
 

  const inputFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setInputFieldsData({...inputFieldsData, [fieldName]: fieldValue});
  }

  const {addSkill} = inputFieldsData;

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
         <h2 className="myprofile_user_name mb-4" style={{color: "#ee00aa"}}>{hrData.name} <EditIcon className="edit_profile_icon" data-toggle="modal" data-target="#exampleModalCenter" /></h2>
         <p style={{textAlign: "start"}}><b>Email Address: </b>{hrData.email}</p>
         <p style={{textAlign: "start"}}><b>Company Name: </b>{hrData.companyName}</p>
         <p style={{textAlign: "start"}}><b>Phone Number: </b>{hrData.phoneNumber}</p>
         <p style={{textAlign: "start"}}><b>Granted by HR: </b>{hrData.isGranted}</p>

           {/* modal */}
        <div className="modal fade text-start" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
       <div className="modal-dialog modal-dialog-centered" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title" id="exampleModalLongTitle">Edit Profile</h5>
             <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div className="modal-body">
           <div>
             <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>User Name</label>
             <TextField
             name="addSkill"
             value={currentUserData.name}
              id="standard-full-width"
              style={{ margin: "8px"}}
              placeholder="Enter Skills"
              fullWidth
              margin="normal"
              InputLabelProps={{
              shrink: true,
              }} />
            </div>

            <div>
             <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Email Address</label>
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

            <div>
             <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Company Name</label>
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

            <div>
             <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Phone Number</label>
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
             <button type="button" className="btn btn-primary update_profile_button"  ><SaveIcon />Add</button>
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


export default HrProfile;