import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
 
import './App.css';
import Admin from "./komponente/Admin";
import Azuriraj from "./komponente/Azuriraj";
import Dodaj from "./komponente/Dodaj";
import LoginPage from "./komponente/LoginPage";
import Nekretnine from "./komponente/Nekretnine";
import RegisterPage from "./komponente/RegisterPage";
 
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {



 

  const [nekretnine,setNekretnine] = useState([ ])
 

  useEffect(() => {
    const getNekretnine = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/nekretnine",
          {
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
          }
        );
        setNekretnine(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getNekretnine();
  }, [ axiosInstance]);

  const [nZaAzuriranje,setNekretninaAzuriraj] = useState(null)
  

  return (
    <BrowserRouter className="App">
      

     
       
      

        <Routes>   
          
          <Route   path="/"  element={<LoginPage  />}/>
          <Route   path="/register"  element={<RegisterPage />}/>

          <Route   path="/admin/azuriraj"  element={<Azuriraj nekretnina={nZaAzuriranje} />}/>
          <Route   path="/admin/dodaj"  element={<Dodaj />}/>
          <Route   path="/admin"  element={<Admin nekretnine={nekretnine} setNekretninaAzuriraj={setNekretninaAzuriraj}/>}/>

          <Route   path="/nekretnine"  element={<Nekretnine nekretnine={nekretnine}/>}/>
          
            
        </Routes>
        
      
    </BrowserRouter>
  );
}

export default App;
