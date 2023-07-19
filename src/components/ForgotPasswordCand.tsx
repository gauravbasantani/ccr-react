import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

type AuthEmail = {
  candidate_email: string;
}

const ForgotPasswordCand = () => {
  const [data, setData] = useState<AuthEmail>({
    candidate_email: '',
  });
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('http://localhost:8090/forgot-password', {
      candidate_email: data.candidate_email,
    })
      .then((res) => {
        setMessage(res.data);
        localStorage.setItem('candidate_email', data.candidate_email);
        
     //   let storedEmail = localStorage.getItem('candidate_email');
     //   console.log('Stored email:', storedEmail);

        navigate('/enterotp');
      })
      .catch((error) => {
   
     setMessage(error.response.data);
      
      });
  };

  return (
    <div className='login'>
      <div className='container'>
        <p className='heading'>Forgot Password Candidate</p>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='email'
            name='candidate_email'
            value={data.candidate_email}
            id='candidate_email'
            onChange={handleChange}
            placeholder='Enter email address'
          />
          <button className='btn' type='submit'>Send OTP</button>
          <br/><br/>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordCand;
