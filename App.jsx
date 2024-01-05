import React, { useState } from "react";
import CommentSection from "./componet/Replay";
// import LikeButton from "./LikeButton";
import LikeButton from "./componet/LikeButton";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setCommentsList([...commentsList, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <h2>Comment Box</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your comment here"
          value={comment}
          onChange={handleInputChange}
        />
        <button type="submit">Add Comment</button>
      </form>
      <div>
        <h3>Comments:</h3>
        {commentsList.length > 0 ? (
          <ul>
            {commentsList.map((c, index) => (
              <li key={index}>
                {c}

                <button>
                  <LikeButton></LikeButton>
                </button>

                <CommentSection></CommentSection>
                {/* <button>🔁</button>
                <button>👍</button> */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
