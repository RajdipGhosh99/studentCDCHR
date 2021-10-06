import { useState } from "react";
import axios from 'axios';


const HrSignUp = () => {

    const [inputFormData, setInputFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        password: "",
        phoneNumber: "",
        type: "hr"
    });

    const inputFieldChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputFormData({...inputFormData, [fieldName]: fieldValue});
    }


    const {name, companyName, email, password, phoneNumber} = inputFormData;

    const hrSugnupFormSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = `http://localhost:8000/hr/signup`;
        try {
            inputFormData.type = "hr";
            const serverResponse = await axios.post(apiUrl, inputFormData);
            if(serverResponse.status==201){
                //HR request to Admin
                hrRequestToAdmin(serverResponse.data._id);             
            }
        } catch (error) {
            alert("Registration failed, Error: "+error.response.data);
        }
    }


    const hrRequestToAdmin = async (hrid)=>{
        console.log(hrid);
        try {
            const apiUrl = `http://localhost:8000/admin/hr-request/add`;
            const serverResponse = await axios.put(apiUrl, {hrid});
            console.log(serverResponse);
            alert("Registration successfull.");
            setInputFormData({name: "", companyName: "", email: "", password: "", phoneNumber: ""});

        } catch (error) {
            throw new Error();
        }
    }

    return (
        <>
           <div className="my-5">
           <h2 style={{textAlign: "center", marginTop: "70px"}}>HR Registration</h2>
            <form action="POST" className="signup" onSubmit={hrSugnupFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name*</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name="name" value={name} onChange={inputFieldChange}   />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputBranch" className="form-label">Company Name*</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name="companyName" value={companyName} onChange={inputFieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputProfilePic" className="form-label">Profoile Picture</label>
                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address*</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name="email" value={email} onChange={inputFieldChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password*</label>
                    <input type="password" className="form-control" required name="password" value={password} onChange={inputFieldChange} required id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label" required value="">Phone Number*</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" name="phoneNumber" value={phoneNumber} onChange={inputFieldChange} />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1" required>Accept our T&C</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    );
}
export default HrSignUp;