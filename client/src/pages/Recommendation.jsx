import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import Header from './Header'
import Navbar from './Navbar'
import { useRef } from "react";
import { ProductData } from './ProductsData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Recommendation() {
  const data=ProductData;
  const [gender,setGender]=useState("");
  const [event,setEvent]=useState("");
  const [color,setColor]=useState("");
  const [type,setType]=useState("");
  const [output,setOutput]=useState([]);
  let data1;
  const [fun,setFun]=useState("di");
  const navigate=useNavigate();

  const submit=()=>{
     navigate(`/recommendation/${gender}/${event}/${color}/${type}`)

  
  }

  function aa(){
    const a=[];
    for (let i = 0; i < data.length; i++) {
        if(data[i].gender===gender){
          a.push(data[i]);
        }
    }
    const b=[];
    for(let i=0;i<a.length;i++){
      const b1=a[i].event;
      for(let j=0;j<b1.length;j++){
        if(b1[j]===event){
          b.push(a[i]);
        }
      }
    }

    const c=[];
    for(let i=0;i<b.length;i++){
      const c1=b[i].color;
      for(let j=0;j<c1.length;j++){
        if(c1[j]===color){
          c.push(b[i]);
        }
      }
    }

    const d=[];
    for(let i=0;i<c.length;i++){
      const d1=c[i].type;
      for(let j=0;j<d1.length;j++){
        if(d1[j]===type){
          d.push(c[i]);
        }
      }
    }

    return c;
  }

  return (
    <div>
    <Header />
    <Navbar />  
    <Container className="shadow ">
      <Row>
        <p className='h1 text-success mt-4'>Recommendation Form</p>
      </Row>
      <hr/>
      <Row className='m-4'>
           <Container className="m-2 border border-2 rounded-2">
            <form onSubmit={submit}>
               <div className='m-2'>    
              <label className='text-success m-3 '>Select Your Gender: </label>
              <select className='border-warning rounded-2 p-2 text-success' onChange={e=>setGender(e.target.value)}>
                <option className='text-warning'>Select</option>
                <option className='text-warning'>Men</option>
                <option className='text-warning'>Women</option> 
              </select>
              </div>
              <br/>
              <div className='m-2'> 
              <label  className='text-success m-3 '>Select Your Event: </label>
              <select className='border-warning rounded-2 p-2 text-success' onChange={e=>setEvent(e.target.value)}>
                <option className='text-warning'>Select</option>
                <option className='text-warning'>Shaadi</option>
                <option className='text-warning'>Walima</option>
                <option className='text-warning'>Birthday</option>
                <option className='text-warning'>Travelling</option>
              </select>
              </div>
              <br/>
              <div className='m-2'> 
              <label  className='text-success m-3 '>Select Your Color: </label>
              <select className='border-warning rounded-2 p-2 text-success' onChange={e=>setColor(e.target.value)}>
                <option className='text-warning'>Select</option>  
                <option className='text-warning'>Black</option>
                <option className='text-warning'>Blue</option>
                <option className='text-warning'>Maroon</option>
                <option className='text-warning'>LightBlue</option>
              </select>
              </div>
              <br/>
              <div className='m-2'> 
              <label  className='text-success m-3 '>Select Your Clothing Type: </label>
              <select className='border-warning rounded-2 p-2 text-success' onChange={e=>setType(e.target.value)}>
                <option className='text-warning'>Select</option>
                <option className='text-warning'>Shalwar Qameez</option>
                <option className='text-warning'>Waist Coat</option>
                <option className='text-warning'>Jeans</option>
                <option className='text-warning'>Sarhi</option>
              </select>
              </div>
              <br/>
              <div className='m-2'>
                <input type="submit" value="Recommendation" className="bg-warning text-success border-warning p-2 border border-2 rounded-2" />
       
              </div>
             </form>
             

             </Container>
          
      </Row>
  
      </Container>    
    </div>
  )
}
