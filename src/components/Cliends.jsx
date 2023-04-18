import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FcCallback} from "react-icons/fc";

function Contact (props) {
  return (
    <Container fluid id='Contact' target="blank" className='' style={{marginTop:'8rem',position:'relative'}}>
    <Row>
        <Col lg={12} >
          <div className='imgcontact1'>
                           
<div>
<h4 style={{color:'white',top:'2rem',position:'absolute',left:'15rem'}}>Our Testimonial</h4>
</div>
<div style={{display:'flex'}}>
<h4 style={{color:'white',fontSize:'80px',top:'5rem',position:'absolute',left:'15rem'}}>Our Client Reviews</h4>
<div>
  <Button style={{textAlign:'center',color:'white',left:'15rem',width:'14%',top:'13rem',position:'absolute'}}><h3>Contact Us</h3></Button>
</div>
</div>

              </div>
        
        </Col>
    </Row>
    
   </Container>
  )
}

export default Contact ;