import React from 'react'
import { useNavigate } from 'react-router';

const CCRAdmin = () => {

  
    let ccr_name=localStorage.getItem("ccr_name");
    let ccr_role=localStorage.getItem("ccr_role");
  return (
    <div>Welcome {ccr_name} as CCRAdmin</div>
  )
}

export default CCRAdmin