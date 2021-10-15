import axios from 'axios';
import {useState} from 'react';
import {currentUserDataContext} from "../../App";
import { useHistory } from 'react-router';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import "../../css/Login.css";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const reactToastStyle = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    };



const HrLogin = () => {
    const [inputFormData, setInputFormData] = useState({
        email: "",
        password: ""
    });

    const {currentUserData, setCurrentUserData}  = useContext(currentUserDataContext);
    const history = useHistory();

    const inputFieldChange = (event) => {
       const fieldName = event.target.name;
       const fieldValue = event.target.value;
        setInputFormData({...inputFormData, [fieldName]: fieldValue});
    }

    const {email, password} = inputFormData;
     

    const hrLoginFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const apiUrl = `http://localhost:8000/hr/signin`;
            const serverResponse = await axios.post(apiUrl, inputFormData, {withCredentials: true});
            if(serverResponse.status == 200){
                console.log(serverResponse);
                if(serverResponse.data.isGranted == "pending"){
                    alert("Admin not yet verify your profile, Please wait 1-2 days...");
                }else if(serverResponse.data.isGranted == "false"){
                    alert("Sorry, Admin reject your request");
                }else{
                    const data = serverResponse.data;
                    Cookies.set("user_type", "hr", {expires: 60});
                    setCurrentUserData({...currentUserData, isAlreadyLogin: true, userId: data._id, name: data.name, profile_pic: data.profile_pic, type: data.type, isGranted: data.isGranted});
                    toast.success("Login successfull", reactToastStyle);
                    setTimeout(()=>{
                    history.push("/");
                }, 2000);
                }
                
            } 
        } catch (error) {
            setCurrentUserData({...currentUserData, isAlreadyLogin: false});
            toast.error(error.response.data, reactToastStyle);
        }
    }


    return (
        <>
        <div className="login_root_div" >
        <ToastContainer />
        <div className=" login_main_div shadow">
          <h2 style={{color: "#e6054c", fontStyle: "italic", textAlign: "center"}}>HR Login</h2>
           <hr/>
           <div className="login_form_div">
            <form action="POST" className="login" onSubmit={hrLoginFormSubmit} >

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label form_input_label"><EmailIcon className="login_icon"/>Email address*</label>
                    <input type="email" className="form-control login_form_input" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={inputFieldChange}  />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label form_input_label"><LockIcon className="login_icon" />Password*</label>
                    <input type="password" className="form-control login_form_input" name="password" value={password} onChange={inputFieldChange} id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Accept our T&C</label>
                </div> */}
                <button type="submit" className="btn btn-success">Login<ExitToAppIcon className="ml-1"/></button>
            </form>
            </div>
            </div>
            </div>
        </>
    );
}
export default HrLogin;