import React from "react";
import { Box,  useTheme,Button  } from "@mui/material";
import {  tokens } from "../theme";
import { red } from '@mui/material/colors';

import TextareaAutosize from "@mui/base/TextareaAutosize";
import SendIcon from '@mui/icons-material/Send';
function Home2() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="home">
      
      <Box sx={{display:"flex", flexFlow:"column", alignItems:"center"}}>
      <Box>
      <h1>Enter the Text to Analyze</h1>
        <TextareaAutosize
          minRows={15}
          maxRows={18}
          aria-label="maximum height"
          placeholder="enter your text here"
          style={{ width: "80vw", backgroundColor: colors.primary[400], color: colors.text[400],padding: "10px" }}
        />
      </Box>
      <Box>
      <Button variant="contained" color="success" endIcon={<SendIcon />}>
        UpperCase
      </Button>

      </Box>
      </Box>
    </div>
  );
}

export default Home2;
