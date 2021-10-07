import defaultUser from "../../images/default1.png";
import "../../css/HrCard.css";
import axios from "axios";

const HrRequestCard = ({HrRequestData, fetchDataFromServer})=>{
    return(
        <>
          <div className="card shadow" style={{ width: "18rem" }} >
           <div className="text-center p-2">
           <img className="card-img-top img-fluid student_card_image" src={defaultUser}  alt="Card image cap" />
           </div>
           <hr/>
         
         <div className="card-body text-start">
           <h5 className="card-title hr_card_text"><b>Name: </b>{HrRequestData.name}</h5>
           <p className="card-text hr_card_text"><b>Type: </b> {HrRequestData.type}</p>
           <p className="card-text hr_card_text"><b>Company Name: </b> {HrRequestData.companyName}</p>
           <p className="card-text hr_card_text"><b>Phone Number: </b> {HrRequestData.phoneNumber} </p>
           <p className="card-text hr_card_text"><b>Date: </b>07-10-2021 </p>
           <div className="d-flex justify-content-start align-content-center">
           <div>
               <button href="#" className="btn btn-success">View</button>
             </div>
             <div>
               <button href="#" className="btn btn-success">Accept</button>
             </div>
             <div>
               <button href="#" className="btn btn-danger ml-3" onClick={hrCardDeleteBtn}>Reject</button>
             </div>
           </div>
         </div>
         </div>
        </>
    );
}


export default HrRequestCard;