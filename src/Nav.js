import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./image/1-removebg-preview.png";
import { Link, Outlet } from "react-router-dom"
import "./Nav.css";
function nav() {
  return (
    <>

      <Navbar collapseOnSelect expand="lg" className="bg" sticky="top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu" />
        <Container >
          
          <Navbar.Brand className="logo_menu" href="#home">
            <img className="img-fluid" src={logo} alt="..." />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav" >

            <Nav className="me-auto col-lg-12 ">
              <Nav.Link href="#home" as={Link} to="/" eventKey="/" title="Homepage" >Home</Nav.Link>
              <Nav.Link href="#About" as={Link} to="/About" eventKey="/About" title="About" >About</Nav.Link>
              <Nav.Link href="#portfolio" as={Link} to="/Portfolio" eventKey="/Portfolio" title="Portfolio" >Portfolio</Nav.Link>

              <Nav.Link href="#services"> Service</Nav.Link>
              <Nav.Link href="#blog" as={Link} to="/Blog" eventKey="/Blog" title="Blog"> Blog</Nav.Link>
              <Nav.Link href="#contact"  > Contact Us</Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>
      <Outlet />
    </>
  );
}

export default nav;
