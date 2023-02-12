import React from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from './components/TopBar';
import Home2 from './pages/Home2'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar/>
    <Home2/>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App