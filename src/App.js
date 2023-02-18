import { useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
 
import './App.css';
import LoginPage from "./komponente/LoginPage";
 

function App() {
  const[token,setToken] = useState();
  return (
    <BrowserRouter className="App">
      

     
       
      

        <Routes>   
          
          <Route   path="/"  element={<LoginPage addToken={setToken}/>}/>
          
            
        </Routes>
        
      
    </BrowserRouter>
  );
}

export default App;
