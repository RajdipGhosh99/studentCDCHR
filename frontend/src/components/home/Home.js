import axios from "axios";
import { useState, useEffect } from "react";
import HomeStudentCard from "./HomeStudentCard";

const Home = ()=>{

    const [allStudentsData, setAllStudentsData] = useState([]);
    //This will be a temporary array for filling orginial data
    const [tempAllStudentData, setTempAllStudentData] = useState([]);
    const [studentSearchField, setStudentSearchField] = useState("");

    const fetchAllStudentsFromServer = async ()=>{
        const apiUrl = `http://localhost:8000/student/viewall`;
        try {
            const serverResponse = await axios.get(apiUrl);
            if(serverResponse.status == 200){
                console.log(serverResponse.data);
                setAllStudentsData(serverResponse.data);
                setTempAllStudentData(serverResponse.data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        fetchAllStudentsFromServer();
    }, []);


    const inputFieldChange = (event)=>{
        const fieldValue = event.target.value;
        setStudentSearchField(fieldValue);
       
    }

   

    const searchFormSubmit = (event)=>{
        event.preventDefault();
        let newArray = allStudentsData.filter((studentData, index)=>{
            return studentSearchField == studentData.name
        });
        setAllStudentsData(newArray);

    }

    return(
        <>
    <div className="home_root_div">
     <div className="d-flex justify-content-center" style={{marginTop: "80px"}}>
     <div>
        <form class="form-inline my-2 my-lg-0" onSubmit={searchFormSubmit}>
         <input class="form-control mr-sm-2" type="search" placeholder="Search Student..." aria-label="Search" onChange={inputFieldChange} name="studentSearchField" value={studentSearchField} />
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
     </div>
      
     </div>
     <hr/>
     <div className="row mt-4 container-fluid ">
     {
        allStudentsData.map((student, index)=>{
            return(
                <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-auto text-center mb-3 d-flex justify-content-center" key={index}>
                  <HomeStudentCard studentData={student} />
                </div>
            )
        })
     }
      
     </div>
    </div>
        </>
    );
}

export default Home;