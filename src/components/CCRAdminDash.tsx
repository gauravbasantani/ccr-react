import React from 'react'
import { useNavigate } from 'react-router';

const CCRAdminDash = () => {

  
    let ccr_name=localStorage.getItem("ccr_name");
    let ccr_role=localStorage.getItem("ccr_role");
  return (
  
    <div style={{textAlign:'center'}}>  <br/>Welcome {ccr_name} as CCRAdmin</div>
  )
}

export default CCRAdminDash