import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';


function Cardcarousel () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
          },
      };

  return (

    <Container fluid>
        <Row style={{marginTop:'3rem'}}>
            <Col >
            <Carousel className='transform: translate3d(-100px, 0px, 0px); transition: all 0.05s ease 0s;'  style={{margintop:'2rem'}}  responsive={responsive} 
            autoPlay={true}
            infinite={true}
            // showDots={true}
            autoPlaySpeed={1000}
            transitionDuration={50}
            removeArrowOnDeviceType={["desktop","mobile","tablet","laptop"]} >

<Card  className='c3t2  zoom' style={{ width: '95%' }}>
      <Card.Img variant="top" className='cart1im1'/>
<div style={{position:'absolute',color:'black',width:'70%',height:'55px',backgroundColor:'white',marginTop:'20rem',marginLeft:'45px',borderRadius:'10px solid',borderRadius:'10px'}}><h4 style={{paddingTop:'10px',paddingLeft:'30px'}}>Company Growth</h4></div> 
    </Card>

    <Card  className='c3t2  zoom' style={{ width: '95%' }}>
      <Card.Img variant="top" className='cart1im1'/>
<div style={{position:'absolute',color:'black',width:'70%',height:'55px',backgroundColor:'white',marginTop:'20rem',marginLeft:'45px',borderRadius:'10px solid',borderRadius:'10px'}}><h4 style={{paddingTop:'10px',paddingLeft:'30px'}}>Company Growth</h4></div> 
    </Card>       
  
    <Card  className='c3t2  zoom' style={{ width: '95%' }}>
      <Card.Img variant="top" className='cart1im1'/>
<div style={{position:'absolute',color:'black',width:'70%',height:'55px',backgroundColor:'white',marginTop:'20rem',marginLeft:'45px',borderRadius:'10px solid',borderRadius:'10px'}}><h4 style={{paddingTop:'10px',paddingLeft:'30px'}}>Company Growth</h4></div> 
    </Card>

    <Card  className='c3t2  zoom' style={{ width: '95%' }}>
      <Card.Img variant="top" className='cart1im1'/>
<div style={{position:'absolute',color:'black',width:'70%',height:'55px',backgroundColor:'white',marginTop:'20rem',marginLeft:'45px',borderRadius:'10px solid',borderRadius:'10px'}}><h4 style={{paddingTop:'10px',paddingLeft:'30px'}}>Company Growth</h4></div> 
    </Card>

    <Card  className='c3t2  zoom' style={{ width: '95%' }}>
      <Card.Img variant="top" className='cart1im1'/>
<div style={{position:'absolute',color:'black',width:'70%',height:'55px',backgroundColor:'white',marginTop:'20rem',marginLeft:'45px',borderRadius:'10px solid',borderRadius:'10px'}}><h4 style={{paddingTop:'10px',paddingLeft:'30px'}}>Company Growth</h4></div> 
    </Card>

    <Card  className='c3t2  zoom' style={{ width: '95%' }}>
      <Card.Img variant="top" className='cart1im1'/>
<div style={{position:'absolute',color:'black',width:'70%',height:'55px',backgroundColor:'white',marginTop:'20rem',marginLeft:'45px',borderRadius:'10px solid',borderRadius:'10px'}}><h4 style={{paddingTop:'10px',paddingLeft:'30px'}}>Company Growth</h4></div> 
    </Card>
   
</Carousel>

            </Col>
        </Row>
    </Container>
  )
}

export default Cardcarousel;