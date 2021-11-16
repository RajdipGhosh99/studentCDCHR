import React from 'react'
import css from "../css/footer.css"
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaWhatsappSquare, FaTelegram} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-whi footer">
                <div className="container py-5">
                    <div className="row py-4">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3" />
                            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item"><a href="/" target="_blank" title="facebook"><FaFacebookSquare/></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="instagram"><FaTwitterSquare/></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="pinterest"><FaLinkedin/></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="vimeo"><FaInstagramSquare/></a></li>
                                <li className="list-inline-item"><a href="/" target="_blank" title="vimeo"><FaWhatsappSquare /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Students</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><NavLink to="/login" className="text-muted">Login</NavLink></li>
                                <li className="mb-2"><NavLink to="/signup" className="text-muted">Register</NavLink></li>
                                <li className="mb-2"><NavLink to="/contact" className="text-muted">Contact Us</NavLink></li>

                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Company HR</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><NavLink to="/hrsignup" className="text-muted">Login</NavLink></li>
                                <li className="mb-2"><NavLink to="/hrlogin" className="text-muted">Register</NavLink></li>
                                <li className="mb-2"><NavLink to="/contact" className="text-muted">Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Subscribe Updates</h6>
                            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                            <div className="p-1 rounded border">
                                <div className="input-group">
                                    <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-link"><FaTelegram/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyrights  */}
                <div className="bg-light py-4">
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">© 2021 All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
