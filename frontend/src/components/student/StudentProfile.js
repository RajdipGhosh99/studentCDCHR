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



const StudentProfile = () => {

    const {currentUserData, setCurrentUserData}  = useContext(currentUserDataContext);

    // const [inputFieldsData, setInputFieldsData] = useState({
    //     addSkill: ""
    // });

    const [studentData, setStudentData] = useState({});



    
    const fetchStudentDataFromServer = async ()=>{
      const apiUrl = `http://localhost:8000/student/search/${currentUserData.userId}`;
      try {
        const serverResponse = await axios.get(apiUrl);
        if(serverResponse.status == 200){
          console.log("Student profile..........");
          console.log(serverResponse)
          setStudentData(serverResponse.data);
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }


    useEffect( async ()=>{

      fetchStudentDataFromServer();
    }, []);







    // const inputFieldChange = (event) => {
    //     const fieldName = event.target.name;
    //     const fieldValue = event.target.value;
    //     setInputFieldsData({...inputFieldsData, [fieldName]: fieldValue});

    // }


    // const addSkillClickButton = async () => {
    //     const apiUrl = `http://localhost:8000/student/skills/update/${currentUserData.userId}`;
    //     try {
    //         const serverResponse = await axios.put(apiUrl, data);
    //         fetchStudentDataFromServer();
    //         setInputFieldsData({addSkill: ""});
    //     } catch (error) {
    //         alert("Skill not update "+error.response.data);
    //     }

    // }

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
           <h2 className="myprofile_user_name">{studentData.name}</h2>
           
           <p>{studentData.branch}, {studentData.course}</p>
           <p style={{textAlign: "start"}}>
           <b>Carrier Objective: </b> <br/> A Career Objective or a Resume Objective is essentially a heading statement that describes your professional goals in two to three sentences. Employers looking to hire an employee for a position tend to seek candidates that are driven enough to understand what they want
           </p>

           <SkillsComponent  studentSkills = {studentData.skills ? studentData.skills : []} fetchStudentDataFromServer={fetchStudentDataFromServer} />
           <EducationComponent studentEducations = {studentData.education ? studentData.education : []} fetchStudentDataFromServer={fetchStudentDataFromServer} />
           <ProjectsProfile  studentProjects = {studentData.projects ? studentData.projects : []} fetchStudentDataFromServer={fetchStudentDataFromServer}  />


         </div>
        </section>
        </>
    );
}


export default StudentProfile;