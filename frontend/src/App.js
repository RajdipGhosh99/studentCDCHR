import Navbar from "./components/Navbar"
import Login from "./components/student/Login"
import SignUp from "./components/student/SignUp";
import HrLogin from "./components/hr/HrLogin";
import HrSignUp from "./components/hr/HrSignUp";
import { Switch, Route } from "react-router-dom";
import Terms from "./components/Terms";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/hrlogin" component={HrLogin} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/hrsignup" component={HrSignUp} />
        <Route path ="/terms" component={Terms}/>
      </Switch>
    </>

  );
}
export default App;