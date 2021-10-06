import axios from 'axios';
import {useState} from 'react';



const AdminLogin = ()=>{

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
            if(serverResponse.status == 200){
                alert("Login Successfull.");
            } 
        } catch (error) {
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