import React, { useState } from "react";
import questions from "./data";
import "./RatingForm.css";
import axios from "axios";

type RatingData = {
  q1: boolean;
  q2: boolean;
  q3: boolean;
  q4: boolean;
  q5: boolean;
  q6: boolean;
  q7: boolean;
  q8: boolean;
  q9: boolean;
  q10: boolean;
};
const RForm = () => {
  const [answers, setAnswers] = useState<RatingData>({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
    q10: false,
  });
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
      <form onSubmit={(e) => handleSubmit(e)}>


      
      <table>
        <tr>
          <th>Q No.</th>
          <th>Questions</th>
          <th>Response</th>
        </tr>
        {questions.map((question) => {
          return (
            <tr>
              <td key={question.id}>{question.id}</td>
              <td>{question.q}</td>

              <td>
                <label>
                  <input type="radio" value="true" name={question.answer} onChange={(e)=>handleChange(e)} />
                  Yes
                </label>
                <label>
                  <input type="radio" value="false" name={question.answer} onChange={(e)=>handleChange(e)} />
                  No
                </label>
              </td>
            </tr>
          );
        })}
      </table>
      <button className='btn' type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

export default RForm;
