import defaultUser from "../../images/default1.png";
import "../../css/StudentCard.css";
import axios from "axios";
import {currentUserDataContext} from "../../App";
import { useContext } from "react";

const HomeStudentCard = ({studentData})=>{

    const {currentUserData, setCurrentUserData} = useContext(currentUserDataContext);

    const detailsButtonClick = async ()=>{
    }

    const addProfileButtonClick = async ()=>{
    }

    return(
        <>
           <div className="card shadow" style={{ width: "18rem" }} >
           <div className="text-center p-2">
           <img className="card-img-top img-fluid student_card_image" src={defaultUser}  alt="Card image cap" />
           </div>
           <hr/>
         
         <div className="card-body text-start">
           <h5 className="card-title hr_card_text"><b>Name: </b>{studentData.name}</h5>
           <p className="card-text hr_card_text"><b>Type: </b>{studentData.type} </p>
           <p className="card-text hr_card_text"><b>Degree: </b>{studentData.course} in {studentData.branch}</p>
           <p className="card-text hr_card_text" style={{marginTop: "16px"}}><b>Skills:</b> C, Java, Python </p>
           <div className="d-flex justify-content-start align-content-center">
             <div>
               <button href="#" className="btn btn-success" onClick={detailsButtonClick}>Details</button>
             </div>
             <div>
             {
                currentUserData.isGranted=="true" && currentUserData.type=="hr" ? <button href="#" className="btn btn-danger ml-3" onClick={addProfileButtonClick}>Add Profile</button> : null
             }
               
             </div>
           </div>
         </div>
         </div>
        </>
    );
}

export default HomeStudentCard;