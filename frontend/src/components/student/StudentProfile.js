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
import Cookies from 'js-cookie';
import SkillsComponent from './studentProfiles/SkillsComponent';
import EducationComponent from './studentProfiles/EducationComponent';
import ProjectsProfile from './studentProfiles/ProjectsProfile';
import WorkExperience from './studentProfiles/WorkExperience';
import LanguageProfile from './studentProfiles/LanguageProfile';
import FieldofInterestProfile from './studentProfiles/FieldofInterestProfile';
import VideoUrlProfile from './studentProfiles/VideoUrlProfile';



const StudentProfile = () => {

    const {currentUserData, setCurrentUserData}  = useContext(currentUserDataContext);

    const [studentData, setStudentData] = useState({});
    const [inputFieldData, setInputFieldData] = useState({
      name: "",
      branch: "",
      course: "",
      email: "",
      phoneNumber: "",
      linkedinLink: "",
      address: "",
      carrierObjective: ""
    });


    const {name, branch, course, email, phoneNumber, linkedinLink, address, carrierObjective} = inputFieldData;

    
    const fetchStudentDataFromServer = async ()=>{
      const apiUrl = `http://localhost:8000/student/search/${currentUserData.userId}`;
      try {
        const serverResponse = await axios.get(apiUrl);
        if(serverResponse.status == 200){
          setStudentData(serverResponse.data);
          console.lon("aaaaaaaaaaa")
          console.log(setStudentData)
        }
      } catch (error) {
        console.log(error.message);
      }
    }


    useEffect( async ()=>{
      fetchStudentDataFromServer();
    }, []);







    const inputFieldChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputFieldData({...inputFieldData, [fieldName]: fieldValue});
    }



    const profileEditIconClick = ()=>{
      setInputFieldData({...inputFieldData, name: studentData.name, branch: studentData.branch, course: studentData.course, email: studentData.email, phoneNumber: studentData.phoneNumber, linkedinLink: studentData.linkedinLink, address: studentData.address, carrierObjective: studentData.carrierObjective});
    }



    const profileAddBtnClick = async () => {
        const apiUrl = `http://localhost:8000/student/update/${currentUserData.userId}`;
        try {
            const serverResponse = await axios.put(apiUrl, inputFieldData, {withCredentials: true});
            if(serverResponse.status == 200){
              fetchStudentDataFromServer();
              alert("Profile updated successfully.");
            }
        } catch (error) {
            alert("Profile not update "+error.response.data);
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
           <h2 className="myprofile_user_name">{studentData.name}<EditIcon className="edit_profile_icon" onClick={profileEditIconClick}  data-toggle="modal" data-target="#exampleModalCenterstudentprofile" /></h2>
             <hr className="hr_line" />
           <div className="row text-start mt-4">
            <div className="col-6 m-auto">
             <p><b>Qualification: </b>{studentData.course} in {studentData.branch}</p>
            </div>
            <div className="col-6 m-auto text-end">
              <p><b>Phone Number: </b>{studentData.phoneNumber}</p>
            </div>
           </div>

           <div className="row text-start" style={{marginTop: "-10px"}}>
            <div className="col-6 m-auto">
            <p><b>Linkedin Link: </b><a href={studentData.linkedinLink} target="_blank" style={{fontSize: "15px"}}>{studentData.linkedinLink}</a></p>
            </div>
            <div className="col-6 m-auto text-end">
              <p><b>Email Id: </b>{studentData.email}</p>
            </div>
           </div>

           <div className="text-start" style={{marginTop: "-10px"}}>
             <p><b>Address:  </b>{studentData.address}</p>
           </div>


              {/* modal */}
          <div className="modal fade text-start" id="exampleModalCenterstudentprofile" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Student Name*</label>
               <TextField
               name="name"
               value={name}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter your name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Highest Degree name*</label>
               <TextField
               name="course"
               value={course}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter degree name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Highest Degree Spealization*</label>
               <TextField
               name="branch"
               value={branch}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter Spealization"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>


              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Phone Number*</label>
               <TextField
               name="phoneNumber"
               value={phoneNumber}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter phone number"
                fullWidth
                margin="normal"
                type="number"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>


              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Linkedin Profile Link*</label>
               <TextField
               name="linkedinLink"
               value={linkedinLink}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter github link"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Parmanent Address*</label>
               <TextField
               name="address"
               value={address}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter your parmanent address"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Carrier Objective*</label>
               <TextField
               name="carrierObjective"
               value={carrierObjective}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter your carrier objective"
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
               <button type="button" className="btn btn-primary update_profile_button" onClick={profileAddBtnClick} ><SaveIcon />Save</button>
               </div>
               <div>
               </div>
               
             </div>
           </div>
         </div>
         </div>


           
           <hr className="hr_line"/>

          
           <p style={{textAlign: "start"}}>
           <b>Carrier Objective: </b> <br/> {studentData.carrierObjective}
           </p>
           <hr className="hr_line"/>
           <SkillsComponent  studentSkills = {studentData.skills ? studentData.skills : []} fetchStudentDataFromServer={fetchStudentDataFromServer} />
           <hr className="hr_line mb-4 mt-4"/>
           <EducationComponent studentEducations = {studentData.education ? studentData.education : []} fetchStudentDataFromServer={fetchStudentDataFromServer} />
           <hr className="hr_line mb-4 mt-4"/>
           <ProjectsProfile  studentProjects = {studentData.projects ? studentData.projects : []} fetchStudentDataFromServer={fetchStudentDataFromServer}  />
           <hr className="hr_line mb-4 mt-4"/>
           <WorkExperience  studentWorkExperience = {studentData.workExprience ? studentData.workExprience : []} fetchStudentDataFromServer={fetchStudentDataFromServer}  />
           <hr className="hr_line mb-4 mt-4"/>
           <LanguageProfile  studentLanguages = {studentData.languages ? studentData.languages : []} fetchStudentDataFromServer={fetchStudentDataFromServer}  />
           <hr className="hr_line mb-4 mt-4"/>
           <FieldofInterestProfile  studentFieldOfInterest = {studentData.fieldsOfInterest ? studentData.fieldsOfInterest : []} fetchStudentDataFromServer={fetchStudentDataFromServer}  />
           <hr className="hr_line mb-4 mt-4"/>
           <VideoUrlProfile  studentVideoUrls = {studentData.videoUrl ? studentData.videoUrl : []} fetchStudentDataFromServer={fetchStudentDataFromServer}  />
           <hr className="hr_line mb-4 mt-4"/>




         </div>
        </section>
        </>
    );
}


export default StudentProfile;