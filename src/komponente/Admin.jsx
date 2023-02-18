import axios from "axios";
import { React } from "react";
 
import {  useNavigate } from "react-router-dom";
 

function Admin() {
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
  return (
    <div className="container">
        
        <button className="btn btn-primary" onClick={handleLogout}>Odjavi se </button>


    </div>
  )
}

export default Admin;
