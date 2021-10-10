import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import {currentUserDataContext} from "../App";
import axios from 'axios';
 

const Logout = ()=> {
  const history = useHistory();
    const {currentUserData, setCurrentUserData} = useContext(currentUserDataContext);
    useEffect( async ()=>{
      if(currentUserData.type == "student"){
        const apiUrl = `http://localhost:8000/student/logout`;
        const serverResponse = await axios.get(apiUrl, {withCredentials: true});
        if(serverResponse.status == 200){
          setCurrentUserData({...currentUserData, isAlreadyLogin: false});
          setTimeout(() => {
            history.push("/login");
          }, 200);
        }else{
          alert("Logout not happend, Something went wrong.");
        }
      }
    },[]);

    return (
      <>
      </>);
}

export default Logout;