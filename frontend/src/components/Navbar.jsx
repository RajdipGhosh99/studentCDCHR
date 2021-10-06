import { NavLink } from "react-router-dom";

const Navbar=()=>{
return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <img src="" alt="" />
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-centre" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">About</NavLink>
                        </li>





                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sign Up
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item"to ="/signup">Student</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="/hrsignup">HR</NavLink></li>

                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Log In
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/login">Student</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="/hrlogin">HR</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="/admin-login">ADMIN</NavLink></li>

                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">My Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Log Out</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </>
);
}
export default Navbar;