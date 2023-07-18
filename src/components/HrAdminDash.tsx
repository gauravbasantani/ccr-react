import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
 

const useStyles = (() => {
 
})




const HrAdminDash = () => {
    let navigate = useNavigate();


    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/addRecruiter");
    }




return(
<div style={{textAlign:'center'}}>
    <h3>HR  Dashboard</h3>

    <form  onSubmit={(e) => handleSubmit(e)} ><br/><br/><br/>
    <button style={{width:'200px',height:'50px'}} type={"submit"}>Add Recruiter</button>
    </form>
    </div>
)

}
export default HrAdminDash;