
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const sectionstyle = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px"
  };

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <h1 style={{ color: 'blue' }}>
          <a href="/" className="text-decoration-none">Darshaan S P</a>
        </h1>
        <Nav className="">
          <div>
            <a href="#home" className="text-decoration-none" style={sectionstyle}>Home</a>
            <a href="#projects" className="text-decoration-none" style={sectionstyle}>Projects</a>
            <a href="#skills" className="text-decoration-none" style={sectionstyle}>Skills</a>
            <a href="#contact" className="text-decoration-none" style={sectionstyle}>Contact</a>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

