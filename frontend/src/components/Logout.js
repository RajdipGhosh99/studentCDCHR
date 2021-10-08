import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import {currentUserDataContext} from "../App";
 

const Logout = ()=> {
  const history = useHistory();
    const {currentUserData, setCurrentUserData} = useContext(currentUserDataContext);
    useEffect(()=>{
    setCurrentUserData({...currentUserData, isAlreadyLogin: false});
    },[]);
    setTimeout(()=>{
      history.push("/login");
    }, 200);
    return (
      <>
      </>);
}

export default Logout;