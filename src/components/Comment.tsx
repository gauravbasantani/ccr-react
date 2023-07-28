import React, { useState } from 'react'
import "./RatingForm.css";
import axios from 'axios';

type AuthComment={
    comment: string,
  }
const Comment = () => {

    const [text, setText] = useState<AuthComment>({
        comment : '',
      })

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        // e.preventDefault();
        setText({...text,[e.target.name] : e.target.value});
        
        console.log({...text,[e.target.name] : e.target.value});
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    
    
        axios.post(`http://localhost:8090/commentsapprove?candidate_id=3&hr_id=3&comment=${text.comment}`, {
          
            
      }).then((res)=>{
        console.log(res.data);
      })}
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>

    <div className="text-area">


<textarea  placeholder="write comment here..." onChange={(e)=>handleComment(e)} value={text.comment} name={"comment"}>

</textarea>

<button className='btn' type={"submit"}>Submit</button>
</div>
    </form>
  )
}

export default Comment