import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {currentUserDataContext} from "../../../App";



const EducationComponent = ({studentEducations, fetchStudentDataFromServer})=>{


    const {currentUserData, setCurrentUserData} = currentUserDataContext;
    const [education, setEducation] = useState({
      collegeName: "",
      degree: "",
      spealization: "",
      marks: "",
      startingDate: "",
      endingDate: ""
    });


    const inputFieldChange = (event)=>{
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      setEducation({...education, [fieldName]: fieldValue});
    }


    const {collegeName, degree, spealization, marks, startingDate, endingDate} = education;



    const educationAddBtnClick = async ()=>{
      if(!collegeName.trim() || !degree.trim() || !spealization.trim() || !startingDate.trim() || !endingDate.trim()){
        alert("Write skill name in input field.");
      }else{
        try {
          const apiUrl = `http://localhost:8000/student/educations/update`;
          const educationData = {education: education};
          const serverResponse = await axios.put(apiUrl, educationData, {withCredentials: true});
          if(serverResponse.status == 200){
            fetchStudentDataFromServer();
            alert("Education added successfully.");
            setEducation({
              collegeName: "",
              degree: "",
              spealization: "",
              marks: "",
              startingDate: "",
              endingDate: ""
            });
          }
        } catch (error) {
          alert(error.response.data);
        }
      }
    }



    return(
        <>
        <div>
        <p style={{textAlign: "start"}}><b>Educations <EditIcon className="edit_profile_icon"   data-toggle="modal" data-target="#exampleModalCentereducation" /></b> </p>
           <div className="row mt-0 text-start">
            {
              studentEducations.map((object, index)=>{
                return(
                  <>
                   <div className="col-lg-12 col-md-12 col-sm-12 col-12 m-auto" key={index}>
                   <div class="card my-3" style={{backgroundColor: "#ebf0ed", border: "3px solid #009431"}}>
                     <div class="card-header"  style={{backgroundColor: "#009431", color: "white"}} >
                     <h5>{object.collegeName}</h5>
                     </div>
                     <div class="card-body">
                       <p class="card-title"><b>Degree: </b>{object.degree}</p>
                       <p class="card-title"><b>Spelization: </b>{object.spealization}</p>
                       <p class="card-title"><b>Marks: </b>{object.marks}%</p>
                       <p class="card-text"><b>Duration: </b>{object.startingDate}-{object.endingDate}</p>
                     </div>
                   </div>
                   </div>
                  </>
                )
              })
            }
            </div>
             {/* modal */}
          <div className="modal fade text-start" id="exampleModalCentereducation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLongTitle">Edit Education</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body">
             <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>School/College Name*</label>
               <TextField
               name="collegeName"
               value={collegeName}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter school/college name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Degree*</label>
               <TextField
               name="degree"
               value={degree}
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
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Spealization*</label>
               <TextField
               name="spealization"
               value={spealization}
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
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Marks(in %)</label>
               <TextField
               name="marks"
               value={marks}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter marks"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>


              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Starting Date*</label>
               <TextField
               name="startingDate"
               value={startingDate}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Degree starting date"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Ending Date*</label>
               <TextField
               name="endingDate"
               value={endingDate}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Degree ending date"
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
               <button type="button" className="btn btn-primary update_profile_button" onClick={educationAddBtnClick} ><SaveIcon />Save</button>
               </div>
               <div>
               </div>
               
             </div>
           </div>
         </div>
         </div>
        </div>
        </>
    );
}


export default EducationComponent;