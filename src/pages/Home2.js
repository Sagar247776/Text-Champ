import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import FontDownloadOffIcon from '@mui/icons-material/FontDownloadOff';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import DeleteIcon from '@mui/icons-material/Delete';

function Home2() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="home">

        <Box>
          <h1>Enter the Text to Analyze</h1>
          <TextareaAutosize
          className="area-size"
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
            <button className="custom-btn btn-1"><span><FontDownloadIcon/></span> Uppercase</button>
            <button className="custom-btn btn-2"><span><FontDownloadOffIcon/></span> Lowercase</button>
            <button className="custom-btn btn-3"><span><SpaceBarIcon/></span> Remove Space</button>
            <button className="custom-btn btn-4"><span><CopyAllIcon/></span> Copy Text</button>
            <button className="custom-btn btn-5"><span><DeleteIcon/></span> Clear Text</button>
          </div>
        </Box>
      <div className="text-summary">
        <h2>Your text summary</h2>
        <h6>1 words and 0 characters
          <br/>
          0.008 Minutes Read</h6>
      </div>
    </div>
  );
}

export default Home2;
