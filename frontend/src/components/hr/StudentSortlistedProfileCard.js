import axios from 'axios';
import { useEffect, useState } from 'react';
import defaultUser from "../../images/default1.png";
import StudentCVCard from "../student/StudentCVCard";



const StudentSortlistedProfileCard = ({studentId})=>{

    const [studentProfileData, setStudentProfileData] = useState({});

    const fetchStudentProfileDataFromServer = async ()=>{
        const apiUrl = `http://localhost:8000/student/search/${studentId}`;
        try {
            const serverResponse = await axios.get(apiUrl);
            if(serverResponse.status == 200){
                setStudentProfileData(serverResponse.data);
            }
        } catch (error) {
            // console.log(error.response.data);
        }
    }

    useEffect(()=>{
        fetchStudentProfileDataFromServer();
    }, []);


    return(
        <>
        {
          //studentProfileData value is not null i.e. not false then do this. Otherwise return null value
          studentProfileData ? 
          <>
        <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-auto text-center mb-3 d-flex justify-content-center" >
        <div className="card shadow" style={{ width: "18rem", height: "24rem"}} >
           <div className="text-center p-2">
           <img className="card-img-top img-fluid student_card_image" src={defaultUser}  alt="Card image cap" />
           </div>
           <hr/>
         
         <div className="card-body text-start">
           <h5 className="card-title hr_card_text"><b>Name: </b>{studentProfileData.name}</h5>
           {/* <p className="card-text hr_card_text"><b>Type: </b>{studentProfileData.type} </p> */}
           <p className="card-text hr_card_text"><b>Qualification: </b>{studentProfileData.course} in {studentProfileData.branch}</p>

           <p className="card-text hr_card_text" style={{marginTop: "-15px"}}><b>Skills: </b>
             {
                studentProfileData.skills ?   
               studentProfileData.skills.map((skill, index)=>{
                 return(
                   <span>{skill}, </span>
                 )
              }) : null
             }
           </p>


           <div className="d-flex justify-content-start align-content-center">
             <div>
               <button className="btn btn-success" data-bs-toggle="modal" data-bs-target={"#exampleModalstudenthrsortlistedprofilecard"+studentProfileData._id} >Details</button>
             </div>
             <div>    
             </div>
           </div>
         </div>
         </div>
        </div>
        <StudentCVCard studentData={studentProfileData} modalId={"exampleModalstudenthrsortlistedprofilecard"+studentProfileData._id}  />
        </> : null
      }
        </>
    );
}

export default StudentSortlistedProfileCard;