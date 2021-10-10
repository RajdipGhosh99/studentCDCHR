import AdminDashboardNav from "./AdminDashboardNav";
import "../../css/AdminAllStudents.css";
import axios from "axios";
import { useState, useEffect } from "react";
import StudentCard from "../student/StudentCard";

const AdminAllStudents = ()=>{
    const [allStudentsData, setAllStudentsdata] = useState([]);
    useEffect( ()=>{
        fetchDataFromServer();
    },[]);

    const fetchDataFromServer = async ()=>{
        const apiUrl = `http://localhost:8000/student/viewall`;
        try {
            const serverResponse = await axios.get(apiUrl);
            console.log(serverResponse.data);
            setAllStudentsdata(serverResponse.data);
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
         <input class="form-control mr-sm-2" type="search" placeholder="Search Student..." aria-label="Search" />
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
     </div>
      
     </div>
     <div className="row mt-4 container-fluid">
     {
        allStudentsData.map((student, index)=>{
            return(
                <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-auto text-center mb-3 d-flex justify-content-center" key={index}>
                  <StudentCard studentData={student} fetchDataFromServer={fetchDataFromServer} />
                </div>
            )
        })
     }
      
     </div>
    </div>
        </>
    );
}

export default AdminAllStudents;