import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#080810';
      showAlert("Dark Mode Enabled", "success")
      // document.title = "Text Utils - Dark Mode"
      //For changing title dynamiclly after every 2 sec.
      // setInterval(() => {
      // document.title = "Text Utils is Amazing - Mike Tyson"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Download Text Utils Now!"
      //   }, 3000);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
      // document.title = "Text Utils - Light Mode"
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 2000);

  return (
    <>
      <Router>
        <Navbar title="WordSwap" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route  exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Magic String!!" mode={mode} />
            </Route>
          </Switch>
          {/* <About /> */}
        </div>
      </Router>
    </>

  );
}

export default App;
