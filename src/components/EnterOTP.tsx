import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

type AuthOTP = {
  candidate_otp: string;
};

const EnterOTP = () => {
  const [data, setData] = useState<AuthOTP>({
    candidate_otp: '',
  });

  let navigate = useNavigate();
//   let storedEmail = localStorage.getItem('candidate_email');
//    console.log('Stored email:', storedEmail);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log({ ...data, [e.target.name]: e.target.value });
   
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:8090/candchangepassforgot', {
        candidate_otp: data.candidate_otp,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/enterpassword');

      })
      .catch(() => {
        console.log('Please Enter Correct OTP');
      });
  };

  return (
    <div className="login">
      <div className="container">
        <p className="heading">Enter OTP Candidate</p>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="candidate_otp"
            value={data.candidate_otp}
            id="candidate_otp"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Your OTP"
          />
          <br/>
          <button className="btn" type="submit">
            Submit OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnterOTP;
