import React from 'react'
import { Link } from 'react-router-dom';

const SuperAdminDash = () => {
  let ccr_name=localStorage.getItem("ccr_name");
  let ccr_role=localStorage.getItem("ccr_role");
return (
  <div style={{textAlign:'center'}}><br/><br/>
  Welcome {ccr_name} as Super Admin<br/><br/>
  <Link to='/addccradmin'> <button>ADD CCR ADMIN</button></Link>
  </div>
)
}

export default SuperAdminDash