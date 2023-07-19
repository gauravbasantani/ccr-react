import React, {useState} from "react";
import axios from "axios";
   

const useStyles = (() => {
 
})

type Values = {
    name : string,
    email : string
}


type Values1 = {
  approver : boolean,
    addteam : boolean
  
}

const AddRecruiter = () => {

    const classes = useStyles();
   
    let hr_id=localStorage.getItem("hr_id");
 let hr_name=localStorage.getItem("hr_name");
 let hr_role=localStorage.getItem("hr_role");


    const [values,setValues] = useState<Values>({
        name : "",
        email:""
    });

    const [values1,setValues1] = useState<Values1>({
        approver : true,
        addteam : true,
    });



    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
     setValues({...values,[event.target.name] : event.target.value});
     setValues1({...values1,[event.target.name] : event.target.checked});
     
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(hr_role=="Admin")
        {
            posDatatoServer()
        }
        else if (hr_role=="TeamLead")
        {
            posDatatoServer2()
        }else{
            alert("Wrong data")
        }

       
    }

  const posDatatoServer =()=>
  {
    axios.post(`http://localhost:8090/Adminaddrecruiter?hrid=${hr_id}&hr_name=${values.name}&hr_email=${values.email}&approver=${values1.approver}&add_team=${values1.addteam}`)
    /*axios.post('http://localhost:8090/Adminaddrecruiter',{
        
    hr_id:hr_id,
    hr_name:values.name,
    approver:values1.approver,
    addteam:values1.addteam
        } ) */
    
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

  const posDatatoServer2 =()=>
  {
    axios.post(`http://localhost:8090/TLaddrecruiter?hrid=${hr_id}&hr_name=${values.name}&hr_email=${values.email}&add_team=${values1.addteam}`)
    
    
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
       
       hr_role=="Admin"?
       (
        <div style={{textAlign:'center'}}>
        <form onSubmit={(e) => handleSubmit(e)} >
        <h5>Welcome {hr_name} </h5>
        <p>Admin Add Recruiter page</p>
        
        

            Name:<input type="text" onChange={handleChange}  name={"name"}/><br/><br/>
            Email:<input type="text" onChange={handleChange}  name={"email"}/><br/><br/>
            Approver: <input type="checkbox" onChange={handleChange}   name={"approver"} ></input><br/><br/>
          Add team: <input type="checkbox" onChange={handleChange}    name={"addteam"} ></input><br/><br/>
        
           
            <button type={"submit"}  >Submit</button>
        </form>
        </div>
   
       )  :hr_role=="TeamLead"?
       (
         <div style={{textAlign:'center'}}>
        <form onSubmit={(e) => handleSubmit(e)} >
        <h5>Welcome {hr_name} </h5>
        <p>Team Lead Add Recruiter page</p>
       
        

          Name:<input type="text" onChange={handleChange}   name={"name"}/><br/><br/>
          Email:<input type="text" onChange={handleChange}  name={"email"}/><br/><br/>
          Add team: <input type="checkbox" onChange={handleChange}  name={"addteam"}></input><br/><br/>
         
            <button type={"submit"}  >Submit</button>
        </form>
        </div>
       ):(
        <div style={{textAlign:'center'}}>
        <h5>Welcome {hr_name} </h5>
        <p>Recruiter  page</p>
       
      
        </div>
       )

   
           
    );
}

export default AddRecruiter;