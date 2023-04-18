import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FcCallback} from "react-icons/fc";

function Contact (props) {
  return (
    <Container fluid id='Contact' target="blank" className='' style={{marginTop:'8rem'}}>
    <Row>
        <Col lg={12} >
          <div className='imgcontact'>
          
          <div style={{width:'100px',height:'100px',borderRadius:'solid',backgroundColor:'white',borderRadius:'50px',marginLeft:'43.8rem',position:'absolute',top:'2rem'}}>
           <FcCallback style={{width:'80px',height:'80px',paddingLeft:'20px',paddingTop:'20px'}}/>
</div>
         
              
<div>
<h4 style={{color:'white',top:'12rem',position:'absolute',left:'25rem'}}>Contact Our Agent For Any kind off Business Help (24/7 Available)</h4>
</div>
<div>
<h4 style={{color:'white',fontSize:'80px',top:'15rem',position:'absolute',left:'33rem'}}>6380355874</h4>
</div>
<div>
  <Button style={{textAlign:'center',color:'white',left:'41rem',width:'14%',top:'25rem',position:'absolute'}}><h3>Contact Us</h3></Button>
</div>
              </div>
        
      
     
      
        </Col>

    </Row>
   </Container>
  )
}

export default Contact ;