import axios from 'axios';

import React, { useState } from 'react';

type Question = {
  id: number;
  text: string;
}

type Answer = {
  id: number;
  value: boolean | null;
}

const questions: Question[] = [
  { id: 1, text: 'Has the candidate worked for a prior company for at least 2-3 years, exhibiting the candidates dedication to a job or organization?' },
  { id: 2, text: 'Is the candidate willing to sign the service agreement?' },
  { id: 3, text: 'Did the candidate demonstrate professionalism and maintain a professional demeanor towards the interview panel during the hiring process?' },
  {id: 4, text:'Did the applicant dress appropriately for the interview?'},
  {id: 5, text:'Did the candidate exhibit strong communication skills during the hiring process?'},
  {id: 6, text:'Did the candidate have a clear way of expressing themselves?'},
  {id: 7, text:'Did the candidate possess relevant certifications for the position they applied for?'},
  {id: 8, text:'Did the candidate meet the required qualifications stated in the job description for the position they were applying for?'},
  {id: 9, text:'Did the candidate have the necessary technical abilities for the job?'},
  {id: 10, text:'Did the candidate display problem-solving and critical thinking skills?'},
];

const RatingForm: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswerChange = (questionId: number, value: boolean) => {
    const updatedAnswers = [...answers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      (answer) => answer.id === questionId
    );

    if (existingAnswerIndex !== -1) {
      // Update existing answer
      updatedAnswers[existingAnswerIndex].value = value;
    } else {
      // Add new answer
      updatedAnswers.push({ id: questionId, value });
    }

    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    try {
      // Send the answers to the backend
      await axios.post('http://localhost:8090/saveYesNo', {
        
      });

      // Reset the form
     // setAnswers(Array(10).fill(false));
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
    console.log(answers);
  };

  return (
    <div>
      <h1>Rating Form</h1>
      <form>
        {questions.map((question) => (
          <div key={question.id}>
            <p>{question.text}</p>
            <label>
              <input
                type="radio"
                value="true"
                checked={answers.find((a) => a.id === question.id)?.value === true}
                onChange={() => handleAnswerChange(question.id, true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="false"
                name='question.id'
                checked={answers.find((a) => a.id === question.id)?.value === false}
                onChange={() => handleAnswerChange(question.id, false)}
              />
              No
            </label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RatingForm;
