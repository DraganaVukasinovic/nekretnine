import axios from "axios";
import { React, useState } from "react";

import { MDBDataTableV5 } from 'mdbreact';
 
import {  useNavigate } from "react-router-dom";
import { BsPencilFill,BsFillTrashFill } from 'react-icons/bs';


function Admin({nekretnine,setNekretninaAzuriraj}) {
   
    const navigate = useNavigate();
    
  function handleLogout(){ 
   
     
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/logout',
      headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
    };
  
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      window.sessionStorage.setItem('auth_id',null); 
      navigate('/');
      sessionStorage.clear();
      window.location.reload()

    })
    .catch(function (error) {
     
      
      console.log(error);
      

    }); 
  }


  function obrisi(id){
    axios
    .delete("http://127.0.0.1:8000/api/nekretnine/"+id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
    .then((res)=>{  
        console.log(res.data);
        alert("USPESNO")
         
    })
    .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });
  }

  function dodaj(){
        navigate('/admin/dodaj'); 
  }
  function azuriraj(nekretnina){

    setNekretninaAzuriraj(nekretnina);

    navigate("/admin/azuriraj/");
}

  const [datatable, setDatatable] = useState({
       
    columns: [
      {
        label: 'id',
        field: 'id',
        width: 150,
      },
      {
        label: 'naziv',
        field: 'naziv',
        width: 200,
      },
      {
        label: 'opis',
        field: 'opis',
        width: 270,
      },
      {
        label: 'adresa',
        field: 'adresa',
        width: 270,
      },
      {
        label: 'cena',
        field: 'cena',
        width: 270,
      },
      {
        label: 'broj_soba',
        field: 'broj_soba',
        width: 270,
      },
      {
        label: 'broj_kupatila',
        field: 'broj_kupatila',
        width: 270,
      },
      {
        label: 'kvadratura',
        field: 'kvadratura',
        width: 270,
      },
      {
        label: 'tip',
        field: 'tip',
        width: 270,
      },
      {
        label: 'opcije',
        field: 'opcije',
        width: 270,
      }

       
    ],
    rows:  nekretnine.map(n=>{
        return{
          id: n.id,
          naziv:n.naziv,
          opis:n.opis,
          adresa:n.adresa,
          broj_soba:n.broj_soba,
          broj_kupatila:n.broj_kupatila,
          kvadratura:n.kvadratura,
          tip:n.tip,
          opcije: <><button className="btn btn-warning" onClick={()=>azuriraj(n)}><BsPencilFill ></BsPencilFill></button><button className="btn btn-danger" onClick={()=>obrisi(n.id)}><BsFillTrashFill></BsFillTrashFill></button></>
         
        
        }
        

    })
})
  return (
    <div className="container">
    <div className="container">
        <button className="btn btn-success" onClick={dodaj}>Dodaj nekretninu </button>

        <button className="btn btn-primary" onClick={handleLogout}>Odjavi se </button>
    </div>
     <div className='container'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
    


</div>
  )
}

export default Admin;
