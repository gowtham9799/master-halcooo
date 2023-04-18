import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FcCallback} from "react-icons/fc";

function Contact (props) {
  return (
    <Container fluid id='Contact' target="blank" className='' style={{marginTop:'10rem',borderRadius:'10px solid',borderRadius:'5px'}}>
    <Row>
        <Col lg={12}>
          <div className='imgcontact2'>
         
        <Row>
           <Col lg={3} sm={3} className="sec11div1" style={{paddingTop:'6rem'}}>
           <h1 className="sec11text1" style={{paddingLeft:'40px'}}>Ready To Work With Us?</h1>
           <h6 className='sec11text2' style={{paddingTop:'1rem',paddingLeft:'40px'}}>Felis consequat magnis est fames sagittis ultrices placerat sodales porttitor quisque.</h6>
          
           <Button style={{marginTop:'1rem',marginLeft:'40px'}}>Get a Quite</Button>
            </Col> 

            <Col lg={3} sm={3} className="sec11div1">
            <h1 className="sec11text1" style={{paddingTop:'6rem',paddingLeft:'70px'}}>Our Services</h1>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'70px'}}>Business planning</h6>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'70px'}}>Tax statergy</h6>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'70px'}}>Financial advice</h6>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'70px'}}>Insurance statergy</h6>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'70px'}}>Manage investment</h6>
            </Col> 

            <Col lg={3} sm={3} className="sec11div1" style={{paddingTop:'5rem',paddingLeft:'50px'}}>
            <h1 className="sec11text1"style={{paddingTop:'1rem',paddingLeft:'50px'}}>Contact us</h1>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'50px'}}>Call Us 24/7</h6>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'50px'}}>6380355874</h6>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'50px'}}>Work with us</h6>
            <h6 className='sec11text2'style={{paddingTop:'1rem',paddingLeft:'50px'}}>gowthamduraisamy97@gmail.com</h6>
            </Col> 

            <Col lg={3} sm={3} className="sec11div1">
            <h1 className="sec11text1"style={{paddingTop:'6rem'}}>Our Location</h1>
            <h6 className='sec11text2'style={{paddingTop:'1rem'}}>XYZ Hilton Street, 125 Town
United State</h6>
            
            </Col> 
</Row>
            
              </div>
        </Col>

    </Row>
   </Container>
  )
}

export default Contact ;