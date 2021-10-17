import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import "../../css/Signup.css";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CircularProgress from '@material-ui/core/CircularProgress';
import {NavLink} from 'react-router-dom';


const reactToastStyle = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    };


const HrSignUp = () => {

    const history = useHistory();

    const [inputFormData, setInputFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        type: "hr"
    });

    const [progressbarState, setProgressbarState] = useState(false);


    const inputFieldChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputFormData({...inputFormData, [fieldName]: fieldValue});
    }


    const {name, companyName, email, password, phoneNumber, address} = inputFormData;

    const hrSugnupFormSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = `http://localhost:8000/hr/signup`;
        try {
            setProgressbarState(true);
            inputFormData.type = "hr";
            const serverResponse = await axios.post(apiUrl, inputFormData);
            if(serverResponse.status==201){
                //HR request to Admin
                hrRequestToAdmin(serverResponse.data._id);   
                setTimeout(()=>{
                    history.push("/hrlogin");
                }, 2000);          
            }
        } catch (error) {
            setProgressbarState(false);
            toast.error("Registration failed, Error: "+error.response.data, reactToastStyle);
        }
    }


    const hrRequestToAdmin = async (hrid)=>{
        console.log(hrid);
        try {
            const apiUrl = `http://localhost:8000/admin/hr-request/add`;
            const serverResponse = await axios.put(apiUrl, {hrid});
            toast.success("Registration successfull", reactToastStyle);
            setProgressbarState(false);
            setInputFormData({name: "", companyName: "", email: "", password: "", phoneNumber: "", address: ""});

        } catch (error) {
            setProgressbarState(false);
            throw new Error();
        }
    }

    return (
        <>
           <div className="signup_root_div">
           <ToastContainer />
           <div className="signup_main_div">
           <h2 style={{color: "#05e374", fontStyle: "italic", textAlign: "center"}}>HR Registration</h2>
           <hr  className="hr_line"/>
           <div className="signup_form_div">
            <form action="POST" className="signup" onSubmit={hrSugnupFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label form_input_label">Name*</label>
                    <input type="text" placeholder="Enter name" className="form-control signup_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" required name="name" value={name} onChange={inputFieldChange}   />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputBranch" className="form-label form_input_label">Company Name*</label>
                    <input type="text" placeholder="Enter company name" className="form-control signup_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" required name="companyName" value={companyName} onChange={inputFieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputProfilePic" className="form-label form_input_label">Profoile Picture</label>
                    <input type="file" className="form-control signup_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" value="" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label form_input_label">Email address*</label>
                    <input type="email" placeholder="Enter email address" className="form-control signup_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" required name="email" value={email} onChange={inputFieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label form_input_label" >Password*</label>
                    <input type="password" placeholder="Enter password" className="form-control signup_form_input" required name="password" value={password} onChange={inputFieldChange} required id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label form_input_label" required value="">Phone Number*</label>
                    <input type="number" placeholder="Enter phone number" className="form-control signup_form_input" id="exampleInputPassword1" name="phoneNumber" value={phoneNumber} onChange={inputFieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label form_input_label">Current Address</label>
                    <input type="text" placeholder="Enter your current address" className="form-control signup_form_input" id="exampleInputPhone" aria-describedby="emailHelp" name="address"  value={address} onChange={inputFieldChange}  required />
                </div>

                <div className="d-flex justify-content-start align-items-center" style={{width: "500px"}}>
                <div>
                <button type="submit" className="btn btn-success mt-0"><PersonAddIcon className="mr-1"/>SignUp</button>
                </div>
                <div style={{width: "60px"}} className="ml-3 mr-4">
                {
                  progressbarState ? <CircularProgress style={{color: "green"}} /> : null
                }
                </div>
                <div>
                  <NavLink exact to="/hrlogin" ><p className=" mt-2">Already have an Account?</p></NavLink>
                </div>
                </div>
                </form>
                </div>
                </div>
                </div>
        </>
    );
}
export default HrSignUp;