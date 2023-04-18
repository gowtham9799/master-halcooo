import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../images/img1.jpg';
import Sidenavbar from './Sidenavbar';
import {FiPhoneCall} from "react-icons/fi";
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar style={{backgroundColor:"#06277b"}} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={img1} style={{width:'100%',height:'80px',marginRight:'30px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link style={{marginTop:'16px'}} className='text-white' href="#home">Home</Nav.Link>

            <NavDropdown style={{marginTop:'16px'}} className='text' title="Services" >
              <NavDropdown.Item  href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown style={{marginTop:'16px'}} title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">pages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown style={{marginTop:'16px',color:'white'}} title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown style={{marginTop:'16px'}} title="Elements" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Elements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={{marginTop:'16px'}} className='text-white' href="#">Contacts</Nav.Link>
            <div style={{width:'60px',height:'60px',backgroundColor:'white',borderRadius:'10px solid',borderRadius:'5px',marginLeft:'3rem'}}>
                   <FiPhoneCall style={{width:'40px',height:'50px',paddingTop:'10px',paddingLeft:'15px'}}/>
            </div>
            <div>
              <h5 style={{color:'white',paddingLeft:'15px'}}>Call Us Anytime</h5>
              <h4 style={{color:'white',paddingLeft:'15px'}}>6380355874</h4>
            </div>
            <Button style={{marginLeft:'3rem',borderRadius:'10px solid',borderRadius:'8px'}}>
              <h5>Book a Meeting</h5>
            </Button>
<Sidenavbar/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;