import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; 

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  
  /*-------For Red Color--------*/
  const redMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#BF2322"
      showAlert("Red Mode enabled !!!", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode enabled !!!", "success")
    }
  }
  
  /*-------For Green Color-------*/
  const greenMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#28922C"
      showAlert("Green Mode enabled !!!", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode enabled !!!", "success")
    }
  }

  /*-------For Dark Color--------*/
  const toggleMode = () => { 
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode enabled !!!", "success")
      document.title = "TextUtils - DarkMode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode enabled !!!", "success")
      document.title = "TextUtils - LightMode"
    }
  }
    
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} redMode={redMode} greenMode={greenMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      <Routes>
      <Route path="/" element={<TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert} btnColor={"primary"}/>} />
      
      <Route path="/about" element={<About/>} />
      {/*<TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert} btnColor={"primary"}/>

      */}
      
      </Routes>
  </div>
    </Router>
    </>
  );  
}

export default App;
