import React, { useState } from "react";
import "./Home.scss";

function Home(props) {
  const [text, setText] = useState("");
  const upper = () => {
      let uppertext = text.toUpperCase();
      setText(uppertext);
  }
  const lower = () => {
    let lowertext = text.toLowerCase();
    setText(lowertext);
}

  return (
    <div className="home-outer-wrapper container">
      <div className="mt-4 home-head-text">
        <h6 className="mb-0 home-text">Enter Text to Modify</h6>
      </div>
      <div className="mb-4">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="output-outer-wrapper">
        <div className="output-text">
          <span className="output">{text}</span>
        </div>
        <div className="output-btn-wrapper">
          <div className="common-btn">
            <button className="cbtn" onClick={upper}>Uppercase</button>
          </div>
          <div className="common-btn">
            <button className="cbtn" onClick={lower}>Lowercase</button>
          </div>
          <div className="common-btn" onClick={(e) => {
              setText("");
          }}>
            <button className="cbtn">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
