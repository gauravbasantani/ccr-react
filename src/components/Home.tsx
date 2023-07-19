import React from 'react'
import { Link } from 'react-router-dom' 
import './Login.css';
const Home = () => {
  return (
    <div style={{textAlign:'center'}}>
        <p className='heading'>Welcome to CCR</p>
      <Link to='/logincandidate' > <button>Candidate Login</button></Link><br/><br/>
        <Link to='/loginhr'><button>HR Login</button></Link>
    </div>
  )
}

export default Home