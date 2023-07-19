import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
type AuthHr ={
  candidate_email:string,
  candidate_password:string
}
const CandidateLogin = () => {
    const [data, setData] = useState<AuthHr>({
        candidate_email : '',
        candidate_password : '',
      })
    
    const handleChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setData({...data,[e.target.name] : e.target.value});
        console.log({...data,[e.target.name] : e.target.value})
       
    
      }
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.post('http://localhost:8090/candidatelogin', {
            candidate_email: data.candidate_email,
            candidate_password : data.candidate_password
    
          
      
        }).then(res=>{
          console.log(res.data);
        }).catch(()=>{
          console.log("error")
        })
      }
  return (
    <div className='login'>

    <div className='container'>
        <p className='heading'>Candidate Login</p>

        <form className='form' onSubmit={(e)=>handleSubmit(e)}>
            <input type='email' name={'candidate_email'} value={data.candidate_email} id='candidate_email' onChange={(e)=>handleChange(e)} placeholder='Enter email address' />
            <input type='password' name={'candidate_password'} value={data.candidate_password} id='candidate_password' onChange={(e)=>handleChange(e)} placeholder='Enter passsword' /> 
            <Link className='lin' to="/enteremail" >Forget Password</Link>   <br/>
            <button className='btn' type={'submit'}>Submit</button><br/>
            <Link className='lin' to="/registercandidate" >Register</Link>
         </form>   
    </div>
    </div>
  )
}

export default CandidateLogin