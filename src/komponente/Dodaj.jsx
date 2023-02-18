import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
 
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Dodaj() {


    
    const [nekretninaData,setNekretninaData]=useState({
 
    });
    function handleInput(e){  
    
        let newNekretninaData = nekretninaData;  
        newNekretninaData[e.target.name]=e.target.value;
        console.log(newNekretninaData)
        setNekretninaData(newNekretninaData); 
    }
    let navigate = useNavigate();
    function handleAdd(e){
      
        e.preventDefault();   


               
        axios
        .post("http://127.0.0.1:8000/api/nekretnine", nekretninaData )
        .then((res)=>{  
            console.log(res.data);
            if(res.status===200){
             
               alert("USPEH")
                navigate('/admin')

            }else{
                alert("NEUSPESNO");
            }
        });

    }
  return (
        <div className='login'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Dodaj novu nekretninu</h2>
                            <form onSubmit={handleAdd} >                          
                                                      
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="Naziv" 
                                        name="naziv"
                                        onInput={handleInput}
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="Opis" 
                                        name="opis"
                                        onInput={handleInput}
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="adresa" 
                                        name="adresa"
                                        onInput={handleInput}
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="cena" 
                                        name="cena"
                                        onInput={handleInput}
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="broj_soba" 
                                        name="broj_soba"
                                        onInput={handleInput}
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="broj_kupatila" 
                                        name="broj_kupatila"
                                        onInput={handleInput}
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="text" 
                                        placeholder="kvadratura" 
                                        name="kvadratura"
                                        onInput={handleInput}
                                    />
                                </div>
                                <div className="input-group">
                                <label htmlFor="tip_id">Tip</label>

                                    <select name="tip_id" id="tip_id" onInput={handleInput}>
                                    <option value={1}>Kuca</option>
                                    <option value={2}>Stan</option>
                                    <option value={3}>Vikendica</option>
                                    <option value={4}>Poslovni prostor</option>
                                    <option value={5}>Garaza</option>
                                  


                                    </select>
                                </div>
                         
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                                </div>
                                <br/><br/>
                                <p><a href="/register"  className='tekstForme'>I am new here!</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
        
    );
}

export default Dodaj;
