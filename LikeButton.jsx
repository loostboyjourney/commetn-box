import React, { useState } from "react";

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div>
      <button>{likeCount} </button>
      <button style={{ border: "none" }} onClick={handleLikeClick}>
        ❤️
      </button>
    </div>
  );
}

export default LikeButton;
