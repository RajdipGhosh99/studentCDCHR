import defaultUser from "../../images/default_hr.png";
import "../../css/HrCard.css";
import axios from "axios";

const StudentCard = ({HrData, fetchDataFromServer})=>{

    const hrCardDeleteBtn = async ()=>{
       const value = window.confirm("Are you sure to delete this user?");
       if(value){
        const apiUrl = `http://localhost:8000/hr/delete/${HrData._id}`;
        try {
            const serverResponse = await axios.delete(apiUrl);
            fetchDataFromServer();
            
        } catch (error) {
            console.log(error.response.data);
            alert(error.response.data);
        }                
       }
    }

    return(
        <>
           <div className="card shadow" style={{ width: "18rem" }} >
           <div className="text-center p-2">
           <img className="card-img-top img-fluid student_card_image" src={defaultUser}  alt="Card image cap" />
           </div>
           <hr/>
         
         <div className="card-body text-start">
           <h5 className="card-title hr_card_text"><b>Name: </b>{HrData.name}</h5>
           <p className="card-text hr_card_text"><b>Type: </b> {HrData.type}</p>
           <p className="card-text hr_card_text"><b>Email Id: </b> {HrData.email}</p>
           <p className="card-text hr_card_text" style={{marginTop: "-8px"}}><b>Company Name: </b> {HrData.companyName}</p>
           <p className="card-text hr_card_text"><b>Phone Number: </b> {HrData.phoneNumber} </p>
           <div className="d-flex justify-content-start align-content-center">
             <div>
               <button href="#" className="btn btn-success">Details</button>
             </div>
             <div>
               <button href="#" className="btn btn-danger ml-3" onClick={hrCardDeleteBtn}>Delete</button>
             </div>
           </div>
         </div>
         </div>
        </>
    );
}

export default StudentCard;