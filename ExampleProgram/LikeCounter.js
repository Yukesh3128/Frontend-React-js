import React, { useState } from "react";

function ClassCounter(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ margin: "20px" }}>
      <h2>{props.title}</h2>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
      <button onClick={() => setLikes(0)}>Reset</button>
    </div>
  );
}

export default ClassCounter;
