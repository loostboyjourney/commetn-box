import React, { useState } from "react";
import LikeButton from "./LikeButton";

function Comment({ comment, onReply }) {
  const [replyText, setReplyText] = useState("");

  const handleInputChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReply = () => {
    onReply(replyText);
    setReplyText("");
  };

  return (
    <div>
      <p>{comment}</p>
      <div>
        <input
          type="text"
          placeholder="Your reply..."
          value={replyText}
          onChange={handleInputChange}
        />
        <button onClick={handleReply}>Reply</button>
      </div>
    </div>
  );
}

function CommentSection() {
  const [replies, setReplies] = useState([]);

  const handleReply = (reply) => {
    setReplies([...replies, reply]);
  };

  return (
    <div>
      <li>
        <Comment onReply={handleReply} />
        {replies.map((reply, index) => (
          <div key={index}>
            <p>👤 {reply}</p>
            <button>
              <li>
                <CommentSection></CommentSection>
              </li>
            </button>
            <button>
              <LikeButton></LikeButton>
            </button>
          </div>
        ))}
      </li>
    </div>
  );
}

export default CommentSection;
