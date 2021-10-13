import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {currentUserDataContext} from "../../../App";



const LanguageProfile = ({studentLanguages, fetchStudentDataFromServer})=>{

    const {currentUserData, setCurrentUserData} = currentUserDataContext;
    const [newLanguage, setNewLanguage] = useState({
      language: "",
      proficiency: ""
    });


    const inputFieldChange = (event)=>{
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      setNewLanguage({...newLanguage, [fieldName]: fieldValue});
    }


    const {language, proficiency} = newLanguage;


    const languageAddBtnClick = async ()=>{
      if(!language.trim() || !proficiency.trim()){
        alert("Please fill all input fields properly.");
      }else{
        try {
          const apiUrl = `http://localhost:8000/student/languages/update`;
          const data = {language: newLanguage};
          const serverResponse = await axios.put(apiUrl, data, {withCredentials: true});
          if(serverResponse.status == 200){
            fetchStudentDataFromServer();
            alert("Language added successfully.");
            setNewLanguage({
              language: "",
              proficiency: ""
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
        <p style={{textAlign: "start"}}><b>Languages<EditIcon className="edit_profile_icon"   data-toggle="modal" data-target="#exampleModalCenterlanguage" /></b> </p>
           <div className="row mt-0 text-start">
             {
              studentLanguages && studentLanguages.length==0 ? <p>No language</p> : null
             } 
             {
              studentLanguages.map((object, index)=>{
                return(
                  <div className="col-lg-2 col-md-2 col-sm-3 col-3" key={index}>
                    <div style={{backgroundColor: "green", color: "white", borderRadius: "17px", padding: "10px 3px 1px 3px", textAlign: "center"}}><p>{object.language}</p></div>
                  </div>
                )
              })
             }
            </div>
             {/* modal */}
          <div className="modal fade text-start" id="exampleModalCenterlanguage" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLongTitle">Languages</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body">
             <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Add Languages*</label>
               <TextField
               name="language"
               value={language}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Language name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }} />
              </div>

              <div>
               <label htmlFor="exampleFormControlTextarea1" className=" form-label myprofile_form_label " style={{fontWeight: "700"}}>Proficiency level*</label>
               <TextField
               name="proficiency"
               value={proficiency}
               onChange={inputFieldChange}
                id="standard-full-width"
                style={{ margin: "8px"}}
                placeholder="Proficiency level"
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
               <button type="button" className="btn btn-primary update_profile_button" onClick={languageAddBtnClick} ><SaveIcon />Add</button>
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


export default LanguageProfile;