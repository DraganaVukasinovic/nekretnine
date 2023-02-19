import axios from "axios";
import { React, useState } from "react";
import { MDBDataTableV5 } from 'mdbreact';
 
import {  useNavigate } from "react-router-dom";
 

function Nekretnine({nekretnine,ucitajNekretnineSaSpoljnogAPIja}) {
    console.log(nekretnine)
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
  function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
    }
    var danasnjiDatum = formatDate(); //gggg-mm-dd

  function kupi(n){
    const data = new FormData();
    data.append("datum_kupovine",danasnjiDatum);
    data.append("nekretnina_id",n.id);
    data.append("user_id",window.sessionStorage.getItem("auth_id"));



    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/kupovine',
      data:data,
      headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
    };  
    
    axios(config).then(res => {  
        
        console.log(res) 

        if(res.status === 200){
        alert("uspeh")
        }else { 
            alert("greska")
        }
    
    }); 




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
        label: 'kupi',
        field: 'kupi',
        width: 270,
      },

       
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
          kupi:<><button className="btn btn-warning" onClick={()=>kupi(n)}>Kupi</button></>
        
        }
        

    })
   
})      
  function nekretnineSAD(){
    ucitajNekretnineSaSpoljnogAPIja();

    navigate('/nekretnine/SAD');
  }
  return (
    <div className="container">
        <div className="container">
            <button className="btn btn-success" onClick={nekretnineSAD}>Nekretnine u SAD</button>

            <button className="btn btn-primary" onClick={handleLogout}>Odjavi se </button>
        </div>
         <div className='container'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
        


    </div>
  )
}

export default Nekretnine;
