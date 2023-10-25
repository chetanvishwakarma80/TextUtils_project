import React,{useState} from 'react'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"

export default function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled ", "success")
      document.title= 'TextUtils - Dark Mode' 
      // setInterval(() => {
      //   document.title= 'TextUtils Amazing Mode' 
      // }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled ", "success")
      document.title= 'TextUtils - Light Mode' 
    }
  }

  return (
    <>
    <Router>
    <Navbar  title="TextUtils" mode={mode}  toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={ <Textarea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
        <Route path="about" element={ <About mode={mode}/> } />
      {/* <Textarea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
      </Routes>
    </div>
    </Router>
    </>
  )
}
