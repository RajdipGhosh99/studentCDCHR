import axios from 'axios';
import {useState, useContext} from 'react';
import {currentUserDataContext} from "../../App";
import { useHistory } from 'react-router';



const AdminLogin = ()=>{

    const {currentUserData, setCurrentUserData}  = useContext(currentUserDataContext);
    const history = useHistory();
    const [inputFormData, setInputFormData] = useState({
        email: "",
        password: ""
    });

    const inputFieldChange = (event) => {
       const fieldName = event.target.name;
       const fieldValue = event.target.value;
        setInputFormData({...inputFormData, [fieldName]: fieldValue});
    }

    const {email, password} = inputFormData;
     

    const adminLoginFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const apiUrl = `http://localhost:8000/admin/signin`;
            const serverResponse = await axios.post(apiUrl, inputFormData);
            console.log(serverResponse)
            if(serverResponse.status == 200){
                alert("Login Successfull.");
                const data = serverResponse.data;
                setCurrentUserData({...currentUserData, isAlreadyLogin: true, userId: data._id, name: data.name, type: data.type});
                setTimeout(()=>{
                    history.push("/");
                }, 400);
            } 
        } catch (error) {
            setCurrentUserData({...currentUserData, isAlreadyLogin: false});
            alert(error.response.data);
        }
    }

    return(
        <>
          <div >
          <h2 style={{marginTop: "70px", textAlign: "center"}}>Admin Login</h2>
           <hr/>
            <form action="POST" className="login" onSubmit={adminLoginFormSubmit} >

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address*</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" name="email" value={email} onChange={inputFieldChange}  />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password*</label>
                    <input type="password" className="form-control" name="password" required value={password} onChange={inputFieldChange} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    );
}

export default AdminLogin;