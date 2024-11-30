import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextTransformComponent from "./Components/TextTransform";
import About from "./Components/About";

function App() {
  const [theme, setTheme] = useState({
    bgColor: "white",
    color: "black",
  });
  const [alertData, setAlertData] = useState(null);

  const setThemeHandle = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const showAlert = (message, type) => {
    setAlertData({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertData(null);
    }, 1500);
  };

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: theme.bgColor,
          color: theme.color,
        }}
      >
        <NavbarComponent
          title="Text Form"
          mode={theme}
          handleTheme={setThemeHandle}
        />
        <Alert alertData={alertData} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextTransformComponent
                  heading="Text Transform"
                  showAlert={showAlert}
                  mode={theme}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
