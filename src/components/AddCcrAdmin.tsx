import axios from 'axios';
import React, { useState } from 'react'

type AuthCCR ={
    ccr_email:string,
    ccr_password:string,
    ccr_role:string,
    ccr_phone:string,
    ccr_name:string
  }

const AddCcrAdmin = () => {

    const [values,setValues] = useState<AuthCCR>({
        ccr_email:'',
        ccr_password:'',
        ccr_role:'',
        ccr_phone:'',
        ccr_name:''
    });

   



    const handleChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
        setValues({...values,[e.target.name] : e.target.value});
        console.log({...values,[e.target.name] : e.target.value})
       
    
      }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        axios.post('http://localhost:8090/addccradmin', {
            ccr_email: values.ccr_email,
            ccr_password : values.ccr_password,
            ccr_role:values.ccr_role,
            ccr_phone:values.ccr_phone,
            ccr_name:values.ccr_name

    
          
      
        })
        .then(

            (response) => {
                alert("Data Saved")

            },
            (error) => {

                console.log(error);
                alert("Please enter valid details.")
            }
        )
    }

  return (

       
        <div style={{textAlign:'center'}}>
        <form onSubmit={(e) => handleSubmit(e)} >

        <p>Admin Add CCR Admin page</p>
     
        

            Name: <input type="text" onChange={handleChange}  name={"ccr_name"}/><br/><br/>
            Email: <input type="text" onChange={handleChange}  name={"ccr_email"}/><br/><br/>
            Password: <input type="password" onChange={handleChange}  name={"ccr_password"}/><br/><br/>
            Phone: <input type="text" onChange={handleChange}  name={"ccr_phone"}/><br/><br/>
            
           
            <button type={"submit"}  >Submit</button>
        </form>
        </div>
   
     
    
       )

   
           
    
}


export default AddCcrAdmin