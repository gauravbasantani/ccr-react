import './RatingForm.css';

const RatingForm = () => {
    return (
      <div>
          <p className='heading'> Rating Form</p>
          <div className='rating'>
              <table>
                  <tr>
                      <th>Q No.</th>
                      <th>Questiions</th>
                      <th>Response</th>
                  </tr>
                  <tr>
                      <strong><p className='heading'>Commitment</p></strong>
                  </tr>
                  <tr>
                    <td>Q1</td>
                    <td>Has the candidate worked for a prior company for at least 2-3 years, exhibiting the candidate's dedication to a job or organization?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>
                    <tr>
                    <td>Q2</td>
                    <td>Is the candidate willing to sign the service agreement?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>

                  <tr>
                      <strong><p className='heading'>Behavior & Appearance</p></strong>
                  </tr>
                  <tr>
                    <td>Q3</td>
                    <td>Did the candidate demonstrate professionalism and maintain a professional demeanor towards the interview panel during the hiring process?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>
                    <tr>
                    <td>Q4</td>
                    <td>Did the applicant dress appropriately for the interview?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>



                  <tr>
                      <strong><p className='heading'>Communication & Soft Skills</p></strong>
                  </tr>
                  <tr>
                    <td>Q5</td>
                    <td>Did the candidate exhibit strong communication skills during the hiring process?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>
                    <tr>
                    <td>Q6</td>
                    <td>Did the candidate have a clear way of expressing themselves?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>
           

                  <tr>
                      <strong><p className='heading'>Certifications & Education</p></strong>
                  </tr>
                  <tr>
                    <td>Q7</td>
                    <td>Did the candidate possess relevant certifications for the position they applied for?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>
                    <tr>
                    <td>Q8</td>
                    <td>Did the candidate meet the required qualifications stated in the job description for the position they were applying for?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>

                  <tr>
                      <strong><p className='heading'>Behavior & Appearance</p></strong>
                  </tr>
                  <tr>
                    <td>Q9</td>
                    <td>Did the candidate have the necessary technical abilities for the job?</td>
                    <td>
                        <span>

                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>
                    <tr>
                    <td>Q10</td>
                    <td>Did the candidate display problem-solving and critical thinking skills?</td>
                    <td>
                        <span>
                        <input type="radio" id="yes" name="fav_language" value="HTML"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="fav_lan guage" value="CSS"/>
                        <label htmlFor="no">No</label>
                        </span>
                    </td>
                  </tr>


              </table> 
                <div className='submitButton'>
                <button type='submit' >Submit</button> 
                </div>
                
          </div>
      </div>
    );
  };
  
  export default RatingForm;
  