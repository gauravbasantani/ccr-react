import axios from 'axios';
import React, { useEffect, useState } from 'react';

type AuthComment = {
  comment_id: number;
  comment: string;
};

const ReviewSingleComment = () => {
  const [data, setData] = useState<AuthComment>({
    comment_id: 0,
    comment: ''
  });

  useEffect(() => {
    axios.post('http://localhost:8090/getcommentrequest', { comment_id: 1 })
      .then((res) => {
        // setData(res.data);
        console.log(res.data)
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to submit the modified comment back to the server
    // For example, using Axios to make a POST request with the updated comment data
    // axios.post('http://localhost:8090/updatecommentrequest', data)
    //   .then((res) => {
    //     // Handle the response if needed
    //   });
  };

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prevData) => ({
      ...prevData,
      comment: e.target.value
    }));
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="text-area">
          <textarea
            placeholder="write comment here..."
            onChange={(e) => handleComment(e)}
            value={data.comment}
            name={"comment"}
          ></textarea>
          <button className='btn' type={"submit"}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewSingleComment;
