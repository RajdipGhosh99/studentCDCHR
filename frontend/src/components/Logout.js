import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import {currentUserDataContext} from "../App";
 

const Logout = ()=> {
    const {currentUserData, setCurrentUserData} = useContext(currentUserDataContext);
    useEffect(()=>{
    setCurrentUserData({...currentUserData, isAlreadyLogin: false});
    },[]);
    return (
      <>
      </>);
}

export default Logout;