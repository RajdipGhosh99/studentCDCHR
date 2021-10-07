import axios from 'axios';
import {useState} from 'react';
import {currentUserDataContext} from "../../App";
import { useHistory } from 'react-router';
import { useContext } from 'react';



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
            const serverResponse = await axios.post(apiUrl, inputFormData);
            if(serverResponse.status == 200){
                alert("Login Successfull.");
                const data = serverResponse.data;
                setCurrentUserData({...currentUserData, isAlreadyLogin: true, userId: data._id, name: data.name, profile_pic: data.profile_pic, type: data.type, isGranted: data.isGranted});
                setTimeout(()=>{
                    history.push("/");
                }, 400);
            } 
        } catch (error) {
            setCurrentUserData({...currentUserData, isAlreadyLogin: false});
            alert(error.response.data);
        }
    }


    return (
        <>
        <div >
          <h2 style={{marginTop: "70px", textAlign: "center"}}>HR Login</h2>
           <hr/>
            <form action="POST" className="login" onSubmit={hrLoginFormSubmit} >

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={inputFieldChange}  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={inputFieldChange} id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Accept our T&C</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    );
}
export default HrLogin;