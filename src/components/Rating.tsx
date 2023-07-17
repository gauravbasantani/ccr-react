import axios from 'axios'
import React, { useState } from 'react'


type RatingData ={
    q1:boolean,
    q2:boolean,
    q3:boolean,
    q4:boolean,
    q5:boolean,
    q6:boolean,
    q7:boolean,
    q8:boolean,
    q9:boolean,
    q10:boolean,
}

const Rating = () => {

    const [answers, setAnswers] = useState<RatingData>({
        q1: false,
        q2:false,
        q3:false,
        q4:false,
        q5:false,
        q6:false,
        q7:false,
        q8:false,
        q9:false,
        q10:false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        // e.preventDefault();
        setAnswers({...answers,[e.target.name] : e.target.value});
        
        console.log({...answers,[e.target.name] : e.target.value});
      }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.post('http://localhost:8090/saveYesNo', {
            q1 : answers.q1,
            q2 : answers.q2,
            q3 : answers.q3,
            q4 : answers.q4,
            q5 : answers.q5,
            q6 : answers.q6,
            q7 : answers.q7,
            q8 : answers.q8,
            q9 : answers.q9,
            q10: answers.q10
      }).then((res)=>{
        console.log(res.data);
      })}
      
  return (
    <div>
      <h1>Rating Form</h1>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
      <div>
            <p>Has the candidate worked for a prior company for at least 2-3 years, exhibiting the candidates dedication to a job or organization?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q1'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q1'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>
            

        <div>
            <p>Is the candidate willing to sign the service agreement?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q2'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q2'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>


        <div>
            <p>Did the candidate demonstrate professionalism and maintain a professional demeanor towards the interview panel during the hiring process?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q3'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q3'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>


        <div>
            <p>Did the applicant dress appropriately for the interview?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q4'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q4'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>



        <div>
            <p>Did the candidate exhibit strong communication skills during the hiring process?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q5'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q5'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>


        <div>
            <p>Did the candidate have a clear way of expressing themselves?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q6'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q6'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>

        <div>
            <p>Did the candidate possess relevant certifications for the position they applied for?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q7'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q7'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>


        <div>
            <p>Did the candidate meet the required qualifications stated in the job description for the position they were applying for?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q8'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q8'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>



        <div>
            <p>Did the candidate have the necessary technical abilities for the job?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q9'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q9'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>



        <div>
            <p>Did the candidate display problem-solving and critical thinking skills?</p>
            <label>
              <input
                type="radio"
                value="true"
                name='q10'
                onChange={(e)=>handleChange(e)}
              />
              Yes
            </label>
            <label>
              <input
                 type="radio"
                 value="false"
                 name='q10'
                 onChange={(e)=>handleChange(e)}
               />
              No
            </label>
        </div>


            <button className='btn' type={"submit"}>Submit</button>

            
         </form>   
    </div>
  )
}

export default Rating