import React, { useEffect } from 'react'
import { ProductData } from './ProductsData';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import {ImHeartBroken} from 'react-icons/im'
import {RiPagesLine} from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import img1 from "../images/productimages/men/img1.jpg";
export default function RecomForm() {
  let params=useParams();
  const data=ProductData;

  function aa(){
    const a=[];
    for (let i = 0; i < data.length; i++) {
        if(data[i].gender===params.gender.toString()){
          a.push(data[i]);
        }
    }
    const b=[];
    for(let i=0;i<a.length;i++){
      const b1=a[i].event;
      for(let j=0;j<b1.length;j++){
        if(b1[j]===params.event.toString()){
          b.push(a[i]);
        }
      }
    }

    const c=[];
    for(let i=0;i<b.length;i++){
      const c1=b[i].color;
      for(let j=0;j<c1.length;j++){
        if(c1[j]===params.color.toString()){
          c.push(b[i]);
        }
      }
    }

    const d=[];

    for(let i=0;i<c.length;i++){
      const d1=c[i].type;
      for(let j=0;j<d1.length;j++){
        if(d1[j]===params.type.toString()){
          d.push(c[i]);
        }
      }
    }

    return c;
  }
  var b=aa();





  return (
     <div>
      <Header />
      <Navbar />
      <Container className='shadow'>
        <Row>
          <p className='h1 text-success'>Your's Output</p>
        </Row>
        <hr/>
        <Container>
        <Row>
          {b.map((item)=>
                     <Card style={{ width: '18rem' }} className="m-3 shadow">
                      
                     <Card.Img variant="top" src={require('../images/productimages/women/img3.webp').default} />
                     
                     <Card.Body>
                       <Card.Title>{item.gender}</Card.Title>
               
                       <Button variant="border border-3" className='m-2 ' style={{backgroundColor:"rgba(248,153,61,255)"}}><ImHeartBroken/></Button>
                       <Button variant="border border-3" className=' bg-info m-2 '><RiPagesLine/></Button>
                     </Card.Body>
                   </Card>
          )}
          </Row>
        </Container>

      </Container>



     </div>
  );
}
