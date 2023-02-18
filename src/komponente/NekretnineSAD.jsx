import axios from "axios";
import { React, useState } from "react";
import { MDBDataTableV5 } from 'mdbreact';
 
import {  useNavigate } from "react-router-dom";
 

function NekretnineSAD({nekretnine}) {
  
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
  const [datatable, setDatatable] = useState({
       
    columns: [
      {
        label: 'area_type',
        field: 'area_type',
        width: 150,
      },
      {
        label: 'id',
        field: 'id',
        width: 200,
      },
      {
        label: '_score',
        field: '_score',
        width: 270,
      },
      {
        label: 'city',
        field: 'city',
        width: 270,
      },
      {
        label: 'state_code',
        field: 'state_code',
        width: 270,
      },
      {
        label: 'lat',
        field: 'lat',
        width: 270,
      },
      {
        label: 'lon',
        field: 'lon',
        width: 270,
      },

       
    ],
    rows:  nekretnine.map((n)=>{
        return{
          area_type: n.area_type,
          id:n._id,
          _score:n._score,
          city:n.city,
          state_code:n.state_code,
          lat:n.centroid.lat,
          lon:n.centroid.lon,
 
         
        
        }
        

    })
   
})      
 
  return (
    <div className="container">
        <div className="container">
            

            <button className="btn btn-primary" onClick={handleLogout}>Odjavi se </button>
        </div>
         <div className='container'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
        


    </div>
  )
}

export default NekretnineSAD;
