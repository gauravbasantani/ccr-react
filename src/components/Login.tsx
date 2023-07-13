import { useState } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
type AuthHr ={
  hr_email:string,
  hr_password:string
}
const Login = () => {
  // const [data, setData] = useState<Auth>({
  const [data, setData] = useState<AuthHr>({
    hr_email : '',
    hr_password : '',
    
   
  
  })


  const handleChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
    setData({...data,[e.target.name] : e.target.value});
    console.log({...data,[e.target.name] : e.target.value})
   

  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.post('http://localhost:8090/hrlogin', {
     hr_email: data.hr_email,
     hr_password : data.hr_password

      
  
    }).then(res=>{
      console.log(res.data);
    }).catch(()=>{
      console.log("error")
    })
  }
  return (
    <div className='login'>

    <div className='container'>
        <p className='heading'>HR Login</p>

        <form className='form' onSubmit={(e)=>handleSubmit(e)}>
            <input type='email' name={'hr_email'} value={data.hr_email} id='hr_email' onChange={(e)=>handleChange(e)} placeholder='Enter email address' />
            <input type='password' name={'hr_password'} value={data.hr_password} id='hr_password' onChange={(e)=>handleChange(e)} placeholder='Enter passsword' />    
           <Link className='lin' to="/register" >Register</Link>
            <button className='btn' type={'submit'}>Submit</button>
         </form>   
    </div>
    </div>
  )
}

export default Login;