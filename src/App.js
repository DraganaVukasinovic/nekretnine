import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
 
import './App.css';
import Admin from "./komponente/Admin";
import Azuriraj from "./komponente/Azuriraj";
import Dodaj from "./komponente/Dodaj";
import LoginPage from "./komponente/LoginPage";
import Nekretnine from "./komponente/Nekretnine";
import NekretnineSAD from "./komponente/NekretnineSAD";
import RegisterPage from "./komponente/RegisterPage";
import Statistike from "./komponente/Statistike";
 
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {



 

  const [nekretnine,setNekretnine] = useState([ ])
  const [kupovine,setKupovine] = useState([ ])
 

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

  useEffect(() => {
    const getKupovine = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/kupovine",
          {
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
          }
        );
        setKupovine(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getKupovine();
  }, [ axiosInstance]);

  const [nZaAzuriranje,setNekretninaAzuriraj] = useState(null)
  

  const [nekretnineSAD,setNekretnineSAD] = useState([ ])

  function ucitajNekretnineSaSpoljnogAPIja(){
      const options = {
        method: 'GET',
        url: 'https://realtor.p.rapidapi.com/locations/v2/auto-complete',
        params: {input: 'new york', limit: '10'},
        headers: {
          'X-RapidAPI-Key': 'bbb2a722e5msh49d347b4b22fbedp1bb4b9jsn34bcd74d42ae',
          'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        setNekretnineSAD(response.data.autocomplete)
      }).catch(function (error) {
        console.error(error);
      });
  }

  return (
    <BrowserRouter className="App">
      

     
       
      

        <Routes>   
          
          <Route   path="/"  element={<LoginPage  />}/>
          <Route   path="/register"  element={<RegisterPage />}/>

          <Route   path="/admin/statistike"  element={<Statistike kupovine={kupovine} />}/>
          <Route   path="/admin/azuriraj"  element={<Azuriraj nekretnina={nZaAzuriranje} />}/>
          <Route   path="/admin/dodaj"  element={<Dodaj />}/>
          <Route   path="/admin"  element={<Admin nekretnine={nekretnine} setNekretninaAzuriraj={setNekretninaAzuriraj} />}/>

          <Route   path="/nekretnine/SAD"  element={<NekretnineSAD nekretnine={nekretnineSAD}  />}/>

          <Route   path="/nekretnine"  element={<Nekretnine nekretnine={nekretnine} ucitajNekretnineSaSpoljnogAPIja={ucitajNekretnineSaSpoljnogAPIja} />}/>
          
            
        </Routes>
        
      
    </BrowserRouter>
  );
}

export default App;
