import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { AiFillLinkedin} from "react-icons/ai";
import img1 from "../images/img1.jpg";

function Blog1 () {
  return (
    <Container style={{marginTop:'2rem'}}>
         <Row>
            <Col>

        <Row>
            <Col>
            <h4 className='c3t1'> Our Team</h4>
            <h6  style={{marginTop:'2rem', textAlign:'justify'}}>A committed and experienced team of domain experts, health care specialists, educators, data scientists,
                 and technology experts with a vision to transform the way “healthcare and wellbeing” solutions are delivered to those involved with autism spectrum disorders.</h6>
            </Col>
            <h4 style={{marginTop:'2rem'}} className='c3t1'>Chief Advisor </h4>
        </Row>

        <Row>
    <Col>
     <Row>
    <Col lg={4}>
    <AiFillLinkedin/>
    </Col>

    <Col lg={8}>
    <h4> Dr.Ashok Mysore</h4>
    </Col>
   </Row>
   </Col>
        </Row>

<Row style={{marginTop:'2rem'}}>
    <Col lg={4}>
    <img className='zoom'  style={{width:'98%',borderRadius:'20px'}} src={img1}></img>
    </Col>
    <Col lg={8}>
    <h6 style={{textAlign:'justify'}}>Dr.Ashok Mysore is an experienced Professor with a demonstrated history of working in mental health care and autism
        in particular. Developing clinical care models for autism besides being involved in research to uncover its underpinnings.
         He is a Doctor of Medicine (MD) - Psychological Medicine from NIMHANS, Bangalore, India. His teams are currently developing 
         tools for use in India for Early identification of autism in children below 18 months, measure for Adolescent Depression and Indian Panic Anxiety Questionnaire.</h6>
    <h6 style={{marginTop:'2rem', textAlign:'justify'}}>Dr.Ashok is the head of CARE-ADD, a center focused on autism and developmental disorders in St. John's National 
        Academy of Health Sciences, Bangalore . This Centre will conduct foundational research in genomics, brain studies and child behaviours.

</h6>
    <h6 style={{marginTop:'2rem', textAlign:'justify'}}>This will help uncover some of the complex relationships among genetics – brain circuitry – behaviour, subsequently
         leading to a better understanding of Autism. While long term research is at the core of the Centre, in parallel, the Centre
          will also provide screening, therapy, education and parent programmes to address current issues immediately.</h6>
    </Col>
</Row>

        </Col>
        </Row>
    </Container>
  )
}

export default Blog1;