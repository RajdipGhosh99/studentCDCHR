import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {currentUserDataContext} from "../../../App";



const WorkExperience = ({studentWorkExperience, fetchStudentDataFromServer})=>{


    const {currentUserData, setCurrentUserData} = currentUserDataContext;
    const [workExperience, setWorkExperience] = useState({
      jobTitle: "",
      companyName: "",
      workDesctription: "",
      companyAddress: "",
      startingDate: "",
      endingDate: ""
    });


    const inputFieldChange = (event)=>{
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      setWorkExperience({...workExperience, [fieldName]: fieldValue})
    }


    const {jobTitle, companyName, workDesctription, companyAddress, startingDate, endingDate} = workExperience;



    const workExperienceAddBtnClick = async ()=>{
      if(!jobTitle.trim() || !companyName.trim() || !workDesctription.trim() || !companyAddress.trim() || !startingDate.trim() || !endingDate.trim()){
        alert("Please fill all the fields properly.");
      }else{
        try {
          const apiUrl = `http://localhost:8000/student/work-experiences/update`;
          const workExperienceData = {workExprience: workExperience};
          const serverResponse = await axios.put(apiUrl, workExperienceData, {withCredentials: true});
          if(serverResponse.status == 200){
            fetchStudentDataFromServer();
            alert("Data added successfully.");
            setWorkExperience({
              jobTitle: "",
              companyName: "",
              workDesctription: "",
              companyAddress: "",
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
        <p style={{textAlign: "start"}}><b>Work Experiences<EditIcon className="edit_profile_icon"   data-toggle="modal" data-target="#exampleModalCenterworkexperience" /></b> </p>
           <div className="row mt-0 text-start">
           {
            studentWorkExperience && studentWorkExperience.length==0 ? <p>No Work Experience</p> : null
           }

            {
              
              studentWorkExperience.map((object, index)=>{
                return(
                  <>
                   <div className="col-lg-12 col-md-12 col-sm-12 col-12 m-auto" key={index}>
                   <div class="card my-3 shadow" style={{backgroundColor: "#ebf0ed", border: "3px solid orange"}}>
                     <div class="card-header"  style={{backgroundColor: "orange", color: "white"}} >
                     <h5>{object.jobTitle}</h5>
                     </div>
                     <div class="card-body">
                       <p class="card-title"><b>Company Name: </b>{object.companyName}</p>
                       <p class="card-title"><b>Work Description: </b>{object.workDesctription}</p>
                       <p class="card-text"><b>Company Name: </b>{object.companyAddress}</p>
                       <p class="card-text"><b>Duration: </b>From {object.startingDate} to {object.endingDate}</p>
                     </div>
                   </div>
                   </div>
                  </>
                )
              })
            }
            </div>
             {/* modal */}
          <div className="modal fade text-start" id="exampleModalCenterworkexperience" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLongTitle">Work Experiences</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body">
             <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Job Title*</label>
               <TextField
               name="jobTitle"
               value={jobTitle}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter project name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Company Name*</label>
               <TextField
               name="companyName"
               value={companyName}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter project description"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Work Description*</label>
               <TextField
               name="workDesctription"
               value={workDesctription}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Enter url"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>


              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Company Address*</label>
               <TextField
               name="companyAddress"
               value={companyAddress}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Project starting date"
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
                placeholder="Project starting date"
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
                placeholder="Project ending date"
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
               <button type="button" className="btn btn-primary update_profile_button" onClick={workExperienceAddBtnClick} ><SaveIcon />Save</button>
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


export default WorkExperience;