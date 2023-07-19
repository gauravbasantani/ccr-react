import React from 'react'
import { Link } from 'react-router-dom';

const SuperAdminDash = () => {
  let ccr_name=localStorage.getItem("ccr_name");
  let ccr_role=localStorage.getItem("ccr_role");
return (
  <>
  <div>Welcome {ccr_name} as Super Admin</div>
  <Link to='/addccradmin'> <button>ADD CCR ADMIN</button></Link>
  </>
)
}

export default SuperAdminDash