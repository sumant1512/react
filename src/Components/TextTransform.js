import React, { useState } from "react";

function TextTransformComponent(props) {
  const [text, setText] = useState("");

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Upper case converted", "Success");
  };

  const onLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Lower case converted", "Success");
  };

  const onClearClick = () => {
    setText("");
    props.showAlert("Cleared", "Success");
  };

  return (
    <div>
      <div>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <label htmlFor="text">Enter Text</label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode.bgColor,
              color: props.mode.color,
            }}
            value={text}
            onChange={onChangeText}
            id="text"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mt-3 me-3" onClick={onUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mt-3 me-3" onClick={onLowClick}>
          Convert To Lower Case
        </button>
        <button className="btn btn-primary mt-3 me-3" onClick={onClearClick}>
          Clear
        </button>
      </div>
      <div className="my-3">
        <h2>Your Text Summary</h2>
        <p>{text.length} Characters</p>
        <p>{text.length > 0 ? text.split(" ").length : 0} Words</p>
        <p>
          Time needed to read these words is {text.split(" ").length * 0.008}{" "}
          minute
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Please enter in above text box to preview"}
        </p>
      </div>
    </div>
  );
}

export default TextTransformComponent;
