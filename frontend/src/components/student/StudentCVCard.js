import "../../css/StudentCVCard.css";
import defaultUser from "../../images/default1.png";

const StudentCVCard = ({studentData, modalId})=>{
    return(
        <>
          {/* <!--Student details Modal --> */}
          <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg">
                 <div className="modal-content">
                   <div className="modal-header">
                       {/* <h4 className="modal-title" id="exampleModalLabel">Resume</h4> */}
                      
                    <div className="row m-auto" style={{width: "70rem"}}>
                      <div className="col-4 text-start">
                        <img className="img-fluid student_cv_profile_image" src={defaultUser} alt="profile image"  />
                      </div>
                      <div className="col-8">
                       <h3 className="resume_student_name">Nisith Mondal</h3>
                       <p className="student_heading_text" style={{marginTop: "-5px"}}><b>Email Id: </b>nisith@gmail.com</p>
                       <p className="student_heading_text"  style={{marginTop: "-15px"}}><b>Phone No: </b>9091473871</p>
                       <p className="student_heading_text"  style={{marginTop: "-15px"}}><b>Degree: </b>B.Tech in ECE</p>
                       <p className="student_heading_text"  style={{marginTop: "-15px"}}><b>Linkedin: </b>https://www.linkedin.com/nisithmondal</p>
                      </div>
                    </div>
                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                   </div>
                   <div className="modal-body">
                     <div>
                      <div className="carrier_objective_div">
                        <p className="resume_subheading">Carrier Objective:-</p>
                         <p className="carrier_objective_text">A Career Objective or a Resume Objective is essentially a heading statement that describes your professional goals in two to three sentences. Employers looking to hire an employee for a position tend to seek candidates that are driven enough to understand what they want.</p>
                      </div>
                     </div>
                     <hr/>

                     <p className='resume_subheading'>Education:-</p>
                     <div className="row m-auto">
                      <div className="col-6 mb-1">
                        <div className="text-start">
                          <p className="college_name_text">Haldia Institute of Technology</p>
                          <p className="education_text"><b>Degree: </b>B.Tech</p>
                          <p className="education_text"><b>Spelization: </b>ECE</p>
                          <p className="education_text"><b>Duration: </b>From 2017 to 2021</p>
                        </div>
                      </div>
                      <div className="col-6 mb-1">
                         <div className="text-start">
                          <p className="college_name_text">Rajnagar Union High School</p>
                          <p className="education_text"><b>Degree: </b>Higher Secondary</p>
                          <p className="education_text"><b>Spelization: </b>Science</p>
                          <p className="education_text"><b>Duration: </b>From 2013 to 2015</p>
                        </div>
                      </div>
                      <div className="col-6 mb-1">
                         <div className="text-start">
                          <p className="college_name_text">Basudevpur Vidyasagar Vidyapith</p>
                          <p className="education_text"><b>Degree: </b>Secondary</p>
                          <p className="education_text"><b>Spelization: </b>All</p>
                          <p className="education_text"><b>Duration: </b>From 2012 to 2013</p>
                        </div>
                      </div>
                      </div>

                      <hr/>

                    <p className='resume_subheading'>Projects:-</p>
                     <div className="row mt-2 m-auto">

                      <div className="col-12 mb-3">
                        <div className="text-start">
                          <p className="project_name_text">Blog-Spot Web Application</p>
                          <p className="project_text"><b>Description: </b><br/><span style={{padding: "5px"}}>A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result. A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result.A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result.</span></p>
                          <p className="project_text"><b>Duration: </b>From 2020 to 2021</p>
                          <p className="project_text"><b>Link: </b><a href="#" alt="_blank">https://blogspot100.herokuapp.com/</a></p>
                        </div>
                      </div>

                      <div className="col-12 mb-3">
                        <div className="text-start">
                          <p className="project_name_text">Blog-Spot Web Application</p>
                          <p className="project_text"><b>Description: </b><br/><span style={{padding: "5px"}}>A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result. A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result.A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result.</span></p>
                          <p className="project_text"><b>Duration: </b>From 2020 to 2021</p>
                          <p className="project_text"><b>Link: </b><a href="#" target="_blank">https://blogspot100.herokuapp.com/</a></p>
                        </div>
                      </div>

                      </div>
                      <hr/>


                     <p className='resume_subheading'>Work Experiences:-</p>
                     <div className="row mt-2 m-auto">

                      <div className="col-12 mb-3">
                        <div className="text-start">
                          <p className="work_experience_name_text">MERN Stack Development</p>
                          <p className="work_experience_text"><b>Work Description: </b><br/><span style={{padding: "5px"}}>A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result. A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result.A Project is a temporary, unique and progressive attempt or endeavor made to produce some kind of a tangible or intangible result.</span></p>
                          <p className="work_experience_text"><b>Company Name: </b>Paytm</p>
                          <p className="work_experience_text"><b>Company Address: </b>Pune, Maharastra, India</p>
                          <p className="work_experience_text"><b>Duration: </b>From 2010 to 2013</p>
                        </div>
                      </div>

                      </div>
                      <hr/>

                     <p className='resume_subheading'>Languages:-</p>
                     <div className="row m-auto">
                      <div className="col-6 mb-1">
                        <div className="text-start">
                          <p className="language_name_text">English</p>
                          <p className="language_text"><b>Proficiency Level: </b>Excilent</p>
                        </div>
                      </div>
                      <div className="col-6 mb-1">
                         <div className="text-start">
                          <p className="language_name_text">Hindi</p>
                          <p className="language_text"><b>Proficiency Level: </b>Medium</p>
                        </div>
                      </div>
                      <div className="col-6 mb-1">
                         <div className="text-start">
                          <p className="language_name_text">Bengali</p>
                          <p className="language_text"><b>Proficiency Level: </b>Netive</p>
                        </div>
                      </div>
                      </div>
                      <hr/>

                      <p className='resume_subheading'>Fields of Interest:-</p>
                      <div className="row m-auto">
                       <div className="col-3"> Playing Clicket </div>
                       <div className="col-3"> Listining Song </div>
                       <div className="col-3"> Watching Movies </div>
                       <div className="col-3"> Story Writting </div>
                      </div>
                      <hr/>


                      <p className='resume_subheading'>Video Links:-</p>
                     <div className="row m-auto">

                      <div className="col-6 mb-1">
                        <div className="text-start">
                          <p className="language_name_text">Video Resume Link</p>
                          <p className="language_text"><b>Video Link: </b><a href="#" target="_blank">https://www.abc.com/homepage.html</a></p>
                        </div>
                      </div>

                      <div className="col-6 mb-1">
                        <div className="text-start">
                          <p className="language_name_text">Youtube video Link</p>
                          <p className="language_text"><b>Video Link: </b><a href="#" target="_blank">https://www.abc.com/homepage.html</a></p>
                        </div>
                      </div>
                     
                      </div>
                      <hr/>

                      <h4 className="thankyou_text">Thank You</h4>






                   </div>
                   <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                   </div>
                 </div>
               </div>
             </div>
        </>
    );
}

export default StudentCVCard;