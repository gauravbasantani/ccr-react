import axios from 'axios'
import React, { useState } from 'react'

type Data ={
    candidate_aadhar:string,
    candidate_dob:string,
    candidate_email:string,
    candidate_name:string,
    candidate_password:string,
    candidate_phone:string,
}





const CandidateRegister = () => {
    const [data, setData] = useState<Data>({
        candidate_aadhar:'',
        candidate_dob:'',
        candidate_email:'',
        candidate_name:'',
        candidate_password:'',
        candidate_phone:''
    })
    const handleChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
    
        setData({...data,[e.target.name] : e.target.value});
     
    
        console.log({...data,[e.target.name] : e.target.value});
        
       
      }
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.post('http://localhost:8090/registercandidate', {
            candidate_aadhar : data.candidate_aadhar,
            candidate_dob : data.candidate_dob,
            candidate_email : data.candidate_email,
            candidate_name : data.candidate_name,
            candidate_password : data.candidate_password,
            candidate_phone : data.candidate_phone,
      }).then((res)=>{
        console.log(res.data);
      })}
  return (
    <div className='login'>

    <div className='container'>
        <p className='heading'>Register Candidate</p>

        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <input type='text' name={'candidate_name'} value={data.candidate_name} id='candidate_name' onChange={(e)=>handleChange(e)} placeholder='Enter candidate name' />
            <input type='text' name={'candidate_aadhar'} value={data.candidate_aadhar} id='candidate_aadhar' onChange={(e)=>handleChange(e)} placeholder='Enter addhar' />    
        
            <input type='email' name={'candidate_email'} value={data.candidate_email} id='candidate_email' onChange={(e)=>handleChange(e)} placeholder='Enter email' />
            <input type='password' name={'candidate_password'  }value={data.candidate_password} id='company_tan' onChange={(e)=>handleChange(e)} placeholder='Enter password' />

            <label>Enter Date of Birth</label>
            <input type='date' name={'candidate_dob'} value={data.candidate_dob} id='candidate_dob' onChange={(e)=>handleChange(e)}  />
            <input type='text' name={'candidate_phone'} value={data.candidate_phone} id='candidate_phone' onChange={(e)=>handleChange(e)} placeholder='Enter phone number' />    
           
            
            <button className='btn' type={"submit"}>Submit</button>

            
         </form>   
    </div>
    </div>
  )
}

export default CandidateRegister