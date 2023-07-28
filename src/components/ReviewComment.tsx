import axios from 'axios'
import "./RatingForm.css";
import React, { useEffect, useState } from 'react'
type AuthComment={
    // candidate_id:string,
    // hr_id:string,
    // comment_id:number,
    comment: string,
  }
const ReviewComment = () => {
    const [text, setText] = useState<AuthComment>({
        // candidate_id:'',
        // hr_id:'',
        
        comment : '',
      })

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        // e.preventDefault();
        setText({...text,[e.target.name] : e.target.value});
        
        console.log({...text,[e.target.name] : e.target.value});
      }
const useEffect = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
axios.get(`http://localhost:8090/getcommentrequest?candidate_id=1&hr_id=3&comment_id=1`,{
   

}).then((res)=>{
    setText({...text,[e.target.name] : e.target.value});
})
}

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    
    
        axios.get(`http://localhost:8090/getcommentrequest?candidate_id=1&hr_id=3&comment_id=1`, {
          
            
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

export default ReviewComment