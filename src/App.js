import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import  Alert from './components/Alert';
import { useState } from 'react';
import Usabout from './components/Usabout';
import {
   BrowserRouter,
   Routes,
   Route 
  } from "react-router-dom";


function App() {
  const [alert,setAlert] =useState();

  const showAlert = (message, type) => {
  setAlert({
    message: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000);
};
  const [mode,setMode] =useState('light');
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been Enabled","Success");
      document.title='Lightpage-mode'
      // setInterval(()=>{
      //   document.title='install webpage'
      // },1000);
    }
    else
    {
       setMode('dark');
      document.body.style.backgroundColor='black'
      showAlert("Dark Mode has been Enabled","Success");
      document.title='Darkpage-mode'
    }
  }
  
const setRed = (isChecked) => {
  if (mode === 'dark') {
    if (isChecked) {
      document.body.style.backgroundColor = 'red';
      showAlert("Red Mode Enabled", "Success");
      document.title = 'Redpage-mode';
    } else {
      document.body.style.backgroundColor = 'black';
      showAlert("Red Mode Disabled", "Success");
      document.title = 'Darkpage-mode';
    }
  }
};
  const setYellow = (isChecked) => {
  if (mode === 'dark') {
    if (isChecked) {
      document.body.style.backgroundColor = 'yellow';
      showAlert("Yellow Mode Enabled", "Success");
      document.title = 'Yellowpage-mode';
    } else {
      document.body.style.backgroundColor = 'black';
      showAlert("Yellow Mode Disabled", "Success");
      document.title = 'Darkpage-mode';
    }
  }
};
 const setBlue = (isChecked) => {
  if (mode === 'dark') {
    if (isChecked) {
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue Mode Enabled", "Success");
      document.title = 'Bluepage-mode';
    } else {
      document.body.style.backgroundColor = 'black';
      showAlert("Blue Mode Disabled", "Success");
      document.title = 'Darkpage-mode';
    }
  }
};
  return (
     <BrowserRouter>
    <>
{/* <Navbar home="main component" link="link here" mode={mode}/>   */}
    <Navbar home="Home" mode={mode} toggleMode={toggleMode} toggleRed={setRed}
        toggleYellow={setYellow}
        toggleBlue={setBlue} />
      {/* <Navbar/ > */}
        <Alert alert={alert}/>
        
      <div className="conatiner">
         <Routes>
        <Route 
            path="/" 
            element={<Text heading="Enter the Text :" showAlert={showAlert} mode={mode} />} 
          />
     
       <Route 
            path="/about" 
            element={<Usabout />} 
          />
      {/* <Text heading="Enter the Text :"/> */}
      </Routes>
   </div>
  
   </>
   </BrowserRouter>
  );
}

export default App;

