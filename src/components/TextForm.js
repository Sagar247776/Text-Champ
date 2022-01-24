import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("   Converted to Uppercase!", "primary");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("   Converted to Lowercase!", "primary");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("   Text Copy Successfully", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "));
    props.showAlert("   Text Extra Space is Removed Successfully", "warning");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("   Text is Clear Successfully", "danger");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#212121" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#212121",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Space
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container m-3"
        style={{ color: props.mode === "dark" ? "white" : "#212121" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Write Your Text to Preview"}</p>
      </div>
    </>
  );
}
