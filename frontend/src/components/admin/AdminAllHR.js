import AdminDashboardNav from "./AdminDashboardNav";
import "../../css/AdminDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HrCard from "../hr/HrCard";


const AdminAllHR = ()=>{
    const [allHrsData, setAllHrsdata] = useState([]);
    useEffect( ()=>{
        fetchDataFromServer();
    },[]);

    const fetchDataFromServer = async ()=>{
        const apiUrl = `http://localhost:8000/hr/viewall`;
        try {
            const serverResponse = await axios.get(apiUrl);
            console.log(serverResponse.data);
            setAllHrsdata(serverResponse.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return(
        <>
    <div className="admin_dashboard_root_div">
     <AdminDashboardNav />
     <div className="d-flex justify-content-center mt-3">
     <div>
        <form class="form-inline my-2 my-lg-0">
         <input class="form-control mr-sm-2" type="search" placeholder="Search HR..." aria-label="Search" />
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
     </div>
     </div>
     <div className="row mt-4 container-fluid ">
     {
        allHrsData.map((Hr, index)=>{
            
            if(Hr.isGranted=="true"){
                console.log("All Hr map data")
            console.log(Hr)
                return(
                <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-auto text-center mb-3 d-flex justify-content-center" key={index}>
                  <HrCard HrData={Hr} fetchDataFromServer={fetchDataFromServer} />
                </div>
            )
            }else{
                return null;
            }
            
        })
     }
     </div>
    </div>
        </>
    );
}

export default AdminAllHR;