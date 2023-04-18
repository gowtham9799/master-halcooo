import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpeg";
import { Container,Row,Col, Button } from 'react-bootstrap';

function Bannercarousel() {
  return (  
    <Container fluid  id='Home' target="blank" style={{position:'relative',zIndex:'0'}}>
<Row>
   <Col style={{padding:'0px'}}>
    <Carousel  showDots={true} cimglassName="car">
      <Carousel.Item 
            autoPlay={true}
            infinite={true}
            showDots={true}
            autoPlaySpeed={500}
            transitionDuration={50}
            removeArrowOnDeviceType={["desktop","mobile","tablet","laptop"]} > 
        <img
          className="d-block w-100"
          src={img3}
          style={{width:'100%',height:'700px', backgroundposition: 'center',backgroundsize: 'cover'}}
          alt="First slide"
        />
        
        <Carousel.Caption style={{textAlign:'left',marginBottom:'20rem'}}>
          <h3>Autism Spectrum <br/>Disorder</h3>
          <p>Detect Early. Manage Better.</p>
          <Button style={{backgroundColor:'white',color:'purple',borderRadius:'50px',borderRadius:'50px' }}>OUR SOLUTION</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          style={{width:'100%',height:'700px'}}
          alt="Second slide"
        />

<Carousel.Caption style={{textAlign:'left',marginBottom:'20rem'}}>
          <h3>On Demand <br/>Ecosystem</h3>
          <p>Doctor, Therapists & More.</p>
          <Button style={{backgroundColor:'white',color:'purple',borderRadius:'50px' }}>OUR SOLUTION</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block w-100"
          src={img4}
          style={{width:'100%',height:'700px'}}
          alt="Third slide"
        />

<Carousel.Caption style={{textAlign:'left',marginBottom:'20rem'}}>
          <h3>1 in 100 Indian <br/>Children at ASD risk</h3>
          <p>Together, Empowered, Engaged.</p>
          <Button style={{backgroundColor:'white',color:'purple',borderRadius:'50px' }}>OUR SOLUTION</Button>
        </Carousel.Caption>

      </Carousel.Item>
      
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={img5}
          style={{width:'100%',height:'700px'}}
          alt="Third slide"
        />

<Carousel.Caption style={{textAlign:'left',marginBottom:'20rem'}}>
          <h3>1 in 100 Indian <br/>Children at ASD risk</h3>
          <p>Together, Empowered, Engaged.</p>
          <Button style={{backgroundColor:'white',color:'purple',borderRadius:'50px' }}>OUR SOLUTION</Button>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
  )
}

export default Bannercarousel;