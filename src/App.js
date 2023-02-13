import React, { useState } from "react";
import Alert from "./components/Alert";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/TopBar";
import Home from "./pages/Home";

function App() {
  const [theme, colorMode] = useMode();
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <div className="alert-class">
          <Alert alert={alert} />
        </div>
        <Home showAlert={showAlert} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
