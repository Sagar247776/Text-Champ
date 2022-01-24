import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
      showAlert(" Dark mode has been Enabled", "light");
      document.title = "Text Champ - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been Enabled", "dark");
      document.title = "Text Champ - Light";
    }
  };
  return (
    <>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      </div>
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to Analyze"
          mode={mode}
        />
      </div>
      <div>{/* <About/>     */}</div>
    </>
  );
}

export default App;
