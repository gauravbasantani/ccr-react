import { useState } from 'react';
import './Login.css'
import axios from 'axios';
type Data = {
  company_name : string,
  company_address : string,
  company_phone : string,
  company_tan:string,
 
}
 type Hr ={
  hr_name:string,
  hr_phone:string,
  hr_email:string,
  hr_password:string
 }
  


  
const Register = () => {
  
  const [data, setData] = useState<Data>({
    company_name : '',
    company_address : '',
    company_phone:'',
    company_tan:'',
   

    
 

  });

  const [hr, setHr] = useState<Hr>({
    hr_name:'',
    hr_phone:'',
    hr_email:'',
    hr_password:'',
  })

  const handleChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
    
    setData({...data,[e.target.name] : e.target.value});
    setHr({...hr,[e.target.name] : e.target.value})

    console.log({...data,[e.target.name] : e.target.value});
    console.log({...hr,[e.target.name] : e.target.value})
   
  }
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.post('http://localhost:8090/addcomapny', {
      company_name : data.company_name,
      company_address : data.company_address,
      company_phone : data.company_phone,
      company_tan : data.company_tan,
     hr:{
      hr_name: hr.hr_name,
      hr_phone:hr.hr_phone,
      hr_email:hr.hr_email,
      hr_password:hr.hr_password,
     }
      
     
     
     
      // candidate_phone : data.candidate_phone,
      // candidate_dob : data.candidate_dob

      
  
    }).then(res=>{
      console.log(res.data);
    }).catch(()=>{
      console.log("error")
    })
  }
  return (
    <div className='login'>

    <div className='container'>
        <p className='heading'>Register Company</p>

        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <input type='text' name={'company_name'} value={data.company_name} id='company_name' onChange={(e)=>handleChange(e)} placeholder='Enter company name' />
            <input type='text' name={'company_address'} value={data.company_address} id='company_address' onChange={(e)=>handleChange(e)} placeholder='Enter address' />    
        
            <input type='tel' name={'company_phone'} value={data.company_phone} id='company_phone' onChange={(e)=>handleChange(e)} placeholder='Enter Phone number' />
            <input type='text' name={'company_tan'  }value={data.company_tan} id='company_tan' onChange={(e)=>handleChange(e)} placeholder='Enter tan' />

            <p className='heading'>HR Details</p>
            <input type='text' name={'hr_name'} value={hr.hr_name} id='hr_name' onChange={(e)=>handleChange(e)} placeholder='Enter Your name' />
            <input type='text' name={'hr_email'} value={hr.hr_email} id='hr_email' onChange={(e)=>handleChange(e)} placeholder='Enter email address' />    
           
            <input type='password' name={'hr_password'} value={hr.hr_password} id='hr_password' onChange={(e)=>handleChange(e)} placeholder='Enter password' />
            <input type='tel' name={'hr_phone'} value={hr.hr_phone} id='hr_phone' onChange={(e)=>handleChange(e)} placeholder='Enter Phone number' />
            <button className='btn' type={"submit"}>Submit</button>
         </form>   
    </div>
    </div>
  )
}

export default Register;