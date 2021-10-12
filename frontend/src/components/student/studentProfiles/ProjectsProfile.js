import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {currentUserDataContext} from "../../../App";



const ProjectsProfile = ({studentProjects, fetchStudentDataFromServer})=>{


    const {currentUserData, setCurrentUserData} = currentUserDataContext;
    const [project, setProject] = useState({
      projectName: "",
      description: "",
      projectUrl: "",
      startingDate: "",
      endingDate: ""
    });


    const inputFieldChange = (event)=>{
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      setProject({...project, [fieldName]: fieldValue});
    }


    const {projectName, description, projectUrl, startingDate, endingDate} = project;



    const projectAddBtnClick = async ()=>{
      if(!projectName.trim() || !description.trim() || !startingDate.trim() || !endingDate.trim()){
        alert("Please fill all the fields properly.");
      }else{
        try {
          const apiUrl = `http://localhost:8000/student/projects/update`;
          const projectData = {project: project};
          const serverResponse = await axios.put(apiUrl, projectData, {withCredentials: true});
          if(serverResponse.status == 200){
            fetchStudentDataFromServer();
            alert("Project added successfully.");
            setProject({
              projectName: "",
              description: "",
              projectUrl: "",
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
        <p style={{textAlign: "start"}}><b>Projects <EditIcon className="edit_profile_icon"   data-toggle="modal" data-target="#exampleModalCenterprojects" /></b> </p>
           <div className="row mt-0 text-start">
            {
              studentProjects.map((object, index)=>{
                return(
                  <>
                   <div className="col-lg-12 col-md-12 col-sm-12 col-12 m-auto" key={index}>
                   <div class="card my-3" style={{backgroundColor: "#ebf0ed", border: "3px solid #63008a"}}>
                     <div class="card-header"  style={{backgroundColor: "#63008a", color: "white"}} >
                     <h5>{object.projectName}</h5>
                     </div>
                     <div class="card-body">
                       <p class="card-title"><b>Description: </b>{object.description}</p>
                       <p class="card-title"><b>Project Url: </b><a href={object.projectUrl}>{object.projectUrl}</a></p>
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
          <div className="modal fade text-start" id="exampleModalCenterprojects" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLongTitle">Edit Projects</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body">
             <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Project Name*</label>
               <TextField
               name="projectName"
               value={projectName}
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
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Project Description*</label>
               <TextField
               name="description"
               value={description}
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
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Project Url</label>
               <TextField
               name="projectUrl"
               value={projectUrl}
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
               <button type="button" className="btn btn-primary update_profile_button" onClick={projectAddBtnClick} ><SaveIcon />Save</button>
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


export default ProjectsProfile;