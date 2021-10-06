import Navbar from "./components/Navbar"
import Login from "./components/student/Login"
import SignUp from "./components/student/SignUp";
import HrLogin from "./components/hr/HrLogin";
import HrSignUp from "./components/hr/HrSignUp";
import AdminLogin from "./components/admin/AdminLogin";
import HrProfile from "./components/hr/HrProfile";
import AdminDashboard from "./components/admin/AdminDashboard";
import StudentProfile from "./components/student/StudentProfile";
import Home from "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import Logout from "./components/Logout";
import Terms from "./components/Terms";
import React,{useState} from 'react';

const currentUserDataContext = React.createContext();

const App = () => {


  const [currentUserData, setCurrentUserData] = useState({
    userId: "",
    isAlreadyLogin: false,
    name: "",
    profile_pic: "default",
    skills: [],
    type: ""
  });

  return (
    <>
    <currentUserDataContext.Provider value={{currentUserData, setCurrentUserData}}>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/hrlogin" component={HrLogin} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/hrsignup" component={HrSignUp} />
        <Route exact path="/admin-login" component={AdminLogin} />
        <Route exact path="/hr/profile" component={HrProfile} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/student/profile" component={StudentProfile} />
        <Route path ="/terms" component={Terms}/>
        <Route path ="/logout" component={Logout}/>
      </Switch>
      </currentUserDataContext.Provider>
    </>

  );
}
export default App;
export {currentUserDataContext};