import React from 'react'
import { Link } from 'react-router-dom' 
import './Login.css';
const Home = () => {
  return (
    <div>
        <p className='heading'>Welcome to CCR</p>
       
      <Link to='/logincandidate' > <button>Candidate Login</button></Link>&nbsp;
        <Link to='/loginhr'><button>HR Login</button></Link>&nbsp;
        <Link to='/adminlogin'><button>Admin Login</button></Link>
    

        
    </div>
  )
}

export default Home