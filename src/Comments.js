import React, { useState, useEffect } from "react";
import "./styles.css";

let Comments = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("props", props.id);
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
    )
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [props.id]);

  return (
    <div className="Comments">
      <span>Top Comments:</span>
      {comments && comments.title}
    </div>
  );
};

export default React.memo(Comments);
