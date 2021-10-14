import defaultUser from "../../images/default1.png";
import "../../css/StudentCard.css";
import axios from "axios";
import {currentUserDataContext} from "../../App";
import { useContext } from "react";
import { useEffect, useState } from "react";

const HomeStudentCard = ({studentData, modalId, hrProfileData})=>{
  console.log("Student home card..........");
  console.log(hrProfileData);

    const {currentUserData, setCurrentUserData} = useContext(currentUserDataContext);
    

    const detailsButtonClick = async ()=>{
    }

    const addProfileButtonClick = async ()=>{
      try {
        //When hr add a student profile on his/her add to cart items
        if(currentUserData.type=="hr" && currentUserData.isGranted=="true"){
          const apiUrl = `http://localhost:8000/hr/add-student-profile`;
          const data = {
            studentId: studentData._id
          }
          const serverResponse = await axios.put(apiUrl, data, {withCredentials: true});
          if(serverResponse.status == 200){
            alert("Profile added successfully.");
          }
        }else{
          alert("You are not authorized to add student profile.");
        }
      } catch (error) {
        alert(error.message);
      }
    }

    return(
        <>
           <div className="card shadow" style={{ width: "18rem", height: "24rem"}} >
           <div className="text-center p-2">
           <img className="card-img-top img-fluid student_card_image" src={defaultUser}  alt="Card image cap" />
           </div>
           <hr/>
         
         <div className="card-body text-start">
           <h5 className="card-title hr_card_text"><b>Name: </b>{studentData.name} {currentUserData.userId==studentData._id? <span style={{color: "#ee00aa"}}> (your Profile)</span> : null}</h5>
           {/* <p className="card-text hr_card_text"><b>Type: </b>{studentData.type} </p> */}
           <p className="card-text hr_card_text"><b>Qualification: </b>{studentData.course} in {studentData.branch}</p>
           <p className="card-text hr_card_text" style={{marginTop: "-15px"}}><b>Skills: </b>
             {
               studentData.skills.map((skill, index)=>{
                 return(
                   <span>{skill}, </span>
                 )
              })
             }
           </p>
           <div className="d-flex justify-content-start align-content-center">
             <div>
               <button href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target={"#"+modalId} onClick={detailsButtonClick}>Details</button>
             </div>
             <div>
             {
                currentUserData.isGranted=="true" && currentUserData.type=="hr" ? <button href="#" className="btn btn-danger ml-3" onClick={addProfileButtonClick}>Add Profile</button> : null
             }
               
             </div>
           </div>
         </div>
         </div>


{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

           {/* <!--Student details Modal --> */}
             <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog">
                 <div className="modal-content">
                   <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div className="modal-body">
                     <p>{studentData.name}</p>
                   </div>
                   <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button type="button" className="btn btn-primary">Save changes</button>
                   </div>
                 </div>
               </div>
             </div>

        </>
    );
}

export default HomeStudentCard;