import { useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
 
import './App.css';
import Admin from "./komponente/Admin";
import LoginPage from "./komponente/LoginPage";
import Nekretnine from "./komponente/Nekretnine";
import RegisterPage from "./komponente/RegisterPage";
 

function App() {
  const[token,setToken] = useState();
  return (
    <BrowserRouter className="App">
      

     
       
      

        <Routes>   
          
          <Route   path="/"  element={<LoginPage addToken={setToken}/>}/>
          <Route   path="/register"  element={<RegisterPage />}/>
          <Route   path="/admin"  element={<Admin />}/>
          <Route   path="/nekretnine"  element={<Nekretnine />}/>
          
            
        </Routes>
        
      
    </BrowserRouter>
  );
}

export default App;
