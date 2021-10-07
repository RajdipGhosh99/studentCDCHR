import AdminDashboardNav from "./AdminDashboardNav";
import "../../css/AdminDashboard.css";
import { useEffect, useState } from "react";
import HrRequestCard from "./HrRequestCard";


const AdminAllHRRequests = ()=>{
    const [allHrRequests, setAllHrRequests] = useState([]);
    useEffect( ()=>{
        fetchDataFromServer();
    },[]);

    const fetchDataFromServer = async ()=>{
        const apiUrl = `http://localhost:8000/hr/viewall`;
        try {
            const serverResponse = await axios.get(apiUrl);
            console.log(serverResponse.data);
            setAllHrRequests(serverResponse.data);
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
         <input class="form-control mr-sm-2" type="search" placeholder="Search Request..." aria-label="Search" />
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
     </div>
      
     </div>
     <div className="row mt-4 ">
     {
        allStudentsData.map((hrRequest, index)=>{
            return(
                <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-auto text-center mb-3" key={index}>
                  <HrRequestCard HrRequestData={allHrRequests} fetchDataFromServer={fetchDataFromServer} />
                </div>
            )
        })
     }
      
     </div>
    </div>
        </>
    );
}

export default AdminAllHRRequests;