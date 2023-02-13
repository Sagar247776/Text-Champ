import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import FontDownloadOffIcon from "@mui/icons-material/FontDownloadOff";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import DeleteIcon from "@mui/icons-material/Delete";


function Home(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
    <div className="home">
      <Box>
        <h1>Enter the Text to Analyze</h1>
        <TextareaAutosize
          className="area-size"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          minRows={15}
          maxRows={18}
          aria-label="maximum height"
          placeholder="enter your text here"
          style={{
            backgroundColor: colors.primary[400],
            color: colors.text[400],
            padding: "10px",
          }}
        />
      </Box>
      <Box>
        <div className="btns">
          <button className="custom-btn btn-1" onClick={handleUpClick}>
            <span>
              <FontDownloadIcon />
            </span>{" "}
            Uppercase
          </button>
          <button className="custom-btn btn-2" onClick={handleLoClick}>
            <span>
              <FontDownloadOffIcon />
            </span>{" "}
            Lowercase
          </button>
          <button className="custom-btn btn-3" onClick={handleExtraSpaces}>
            <span>
              <SpaceBarIcon />
            </span>{" "}
            Remove Space
          </button>
          <button className="custom-btn btn-4" onClick={handleCopy}>
            <span>
              <CopyAllIcon />
            </span>{" "}
            Copy Text
          </button>
          <button className="custom-btn btn-5" onClick={handleClearClick}>
            <span>
              <DeleteIcon />
            </span>{" "}
            Clear Text
          </button>
        </div>
      </Box>
      <div className="text-summary">
        <h2>Your text summary</h2>
        <div>
          {text.split(" ").length - 1} words and {text.length} characters
          <br />
          <p>{0.008 * text.split(" ").length - 0.008} Minutes Read</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
