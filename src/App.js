import React, { Component, useState, useEffect } from "react";

import Comments from "./Comments";
import "./styles.css";

let App = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="App">
      <h1>Top 10 Stories:</h1>
      <ul>
        {stories.slice(0, 10).map((value, index) => {
          return (
            <li key={index}>
              {`${value} :`} <Comments id={value} />
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
