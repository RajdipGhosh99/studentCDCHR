import axios from 'axios';
import { useHistory } from "react-router";
import { useEffect, useState } from 'react';

const SortlistedProfiles = ()=>{
    const history = useHistory();

    useEffect(()=>{
        
    }, []);



    const homeButtonClick = ()=>{
        history.push("/");
    }

    return(
        <div className="sortlisted_root_div">
        <div style={{marginTop: "70px"}}>
          <h2 className="text-center" style={{color: "#02b56a"}}>Sortlisted Profiles</h2>
          <hr className="" />
          <div className="text-center mt-5">
          <h3 className="text-danger">Student profiles not found.</h3>
           <button className="btn btn-success mt-3" onClick={homeButtonClick}>Home</button>
          </div>
          
          <div className="container-fluid row">
        </div>
        </div>
        </div>
    );
}


export default SortlistedProfiles;