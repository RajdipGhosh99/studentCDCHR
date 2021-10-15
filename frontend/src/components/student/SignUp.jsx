import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

const reactToastStyle = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    };

const SignUp = ()=>{

    const history = useHistory();

    const [inputFormData, setInputFormData] = useState({
        name: "",
        branch: "",
        course: "",
        email: "",
        password: "",
        phoneNumber: "",
        type: "student"
    });

    const inputFieldChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputFormData({...inputFormData, [fieldName]: fieldValue});
    }


    const {name, branch, course, email, password, phoneNumber} = inputFormData;

    const studentSignupFormSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = `http://localhost:8000/student/signup`;
        try {
            const serverResponse = await axios.post(apiUrl, inputFormData);
            if(serverResponse.status==201){
                setInputFormData({name: "", branch: "", course: "", email: "", password: "", phoneNumber: ""});
                toast.success("Registration successfull.", reactToastStyle);
                setTimeout(()=>{
                    history.push("/login");
                }, 2000);
            }
        } catch (error) {
            toast.error(error.response.data, reactToastStyle);
        }
    }

    return(
        <>
          <div className="my-5">
            <h2 style={{textAlign: "center", marginTop: "70px"}}>Student Registration</h2>
            <ToastContainer />
            <hr/>
            <form action="POST" className="signup" onSubmit={studentSignupFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name*</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" required value={name} onChange={inputFieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputBranch" className="form-label">Branch*</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="branch" required  value={branch} onChange={inputFieldChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputCourse" className="form-label">Course*</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="course" required  value={course} onChange={inputFieldChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputProfilePic" className="form-label">Profoile Picture</label>
                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address*</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required  value={email} onChange={inputFieldChange}  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" required value="">Password*</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password"  value={password} onChange={inputFieldChange}  />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label" required value="">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone Number*</label>
                    <input type="number" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" name="phoneNumber"  value={phoneNumber} onChange={inputFieldChange}  required />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1" required>Accept our <NavLink to="/terms">T&C</NavLink></label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    );
}
export default SignUp;