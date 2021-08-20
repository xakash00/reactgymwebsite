import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Routing from "./Routing";
import "aos/dist/aos.css";
import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="#082c6c"
    } else {
      setMode("light");
      document.body.style.backgroundColor="#f5f5f5"
    }
  };

  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Routing mode={mode}/>
      <Footer />
    </>
  );
};
export default App;
