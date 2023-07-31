// import React,{useEffect, useState} from 'react'
// import axios from 'axios'
// type AuthData ={
//     [x: string]: any

//     candidate_name:string
// }
// const ReviewComments = () => {

//     const [data, setData] = useState<AuthData>({
//        candidate_name:'',
//     })
//     // const [data, setData] = useState({
//     //     candidate_name:'',
//     //  })
//  useEffect(() => {
//       axios.get(`http://localhost:8090/getallcandidatescomment`).then((res)=>{
//         // setData(res.data.candidate);
//         console.log(res.data);
//       })
    
      
//     }, [])
    

//   return (
//     <div>
//         <table>
//             <tr>
//                 <th>Names of Candidates</th>
//                 <th>Action</th>
//             </tr>
           

//             <tr>
                
//            {
//             data.map((c)=>{
//                 return(
//                     <td>{c.candidate.candidate_name}</td>
//                 )
//             })
//            }
//             </tr>
     
//         </table>
//     </div>
//   )
// }

// export default ReviewComments

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

type Candidate = {
  candidate: any;
  candidate_name: string;
};

const ReviewComments: React.FC = () => {
  const [data, setData] = useState<Candidate[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8090/getallcandidatescomment').then((res) => {
      console.log(res.data)
      setData(res.data);
      // console.log(first);
       // Assuming the server response is an array of candidates
    });
  }, []);

  const handleView = ()=>{
    navigate('/reviewcomment')
  }

  return (
    <div>
      <table>
        <tr>
          <th>Names of Candidates</th>
          <th>Action</th>
        </tr>
        {data.map((candidate) => (
          <tr key={candidate.candidate.candidate_id}>
            <td>{candidate.candidate.candidate_name}</td>
            <td> <Link to={"/reviewsinglecomment/" +candidate.candidate.candidate_id}>View</Link></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ReviewComments;
