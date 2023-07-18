import axios from 'axios';
import React, { useState } from 'react';

type AuthPassword = {
  candidate_password: string;
}

const EnterPassword = () => {
  const [data, setData] = useState<AuthPassword>({
    candidate_password: '',
  });

  let storedEmail = localStorage.getItem('candidate_email');
  console.log('Stored email:', storedEmail);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.put(`http://localhost:8090/finalcandchangepass?candidate_email=${storedEmail}&newpass=${data.candidate_password}`
    
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <div className="login">
      <div className="container">
        <p className="heading">Change Password Candidate</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="password"
            name="candidate_password"
            value={data.candidate_password}
            id="candidate_password"
            onChange={handleChange}
            placeholder="Enter New Password"
            required
          />
          <button className="btn" type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default EnterPassword;
