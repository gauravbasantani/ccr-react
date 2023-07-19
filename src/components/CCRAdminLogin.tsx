import { useState } from 'react';
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';


type AuthAdmin ={
    ccr_email:string,
    ccr_password:string
}
const CCRAdminLogin = () => {
  // const [data, setData] = useState<Auth>({
  const [data, setData] = useState<AuthAdmin>({
    ccr_email : '',
    ccr_password : '',
  })


  let navigate = useNavigate();

  const handleChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
    setData({...data,[e.target.name] : e.target.value});
   

  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.post('http://localhost:8090/ccrlogin', {
        ccr_email: data.ccr_email,
     ccr_password : data.ccr_password

  
    }).then(res=>{
      console.log(res);

      
      localStorage.setItem('ccr_email', res.data.ccr_email);
      localStorage.setItem('ccr_name', res.data.ccr_name);
     
      let roleccr = localStorage.setItem('ccr_role', res.data.ccr_role);
      
      if( res.data.ccr_role == 'ccr'){
          
          navigate("/ccradmindash");
      }  else{
        if(res.data.ccr_role =='super'){
            navigate("/superadmindash")
        }
      }


      
      
    }).catch(()=>{
      console.log("error")
    })
  }
  return (
    <div className='login'>

    <div className='container'>
        <p className='heading'>CCR Admin Login</p>

        <form className='form' onSubmit={(e)=>handleSubmit(e)}>
            <input type='email' name={'ccr_email'} value={data.ccr_email} id='ccr_email' onChange={(e)=>handleChange(e)} placeholder='Enter email address' />
            <input type='password' name={'ccr_password'} value={data.ccr_password} id='ccr_password' onChange={(e)=>handleChange(e)} placeholder='Enter passsword' />    
            <button className='btn' type={'submit'}>Submit</button>
           <Link className='lin' to="/registerhr" >Register</Link>
           
         </form>   
    </div>
    </div>
  )
}

export default CCRAdminLogin;