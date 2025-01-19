import React from "react";
import "./Content.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./data";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Content = () => {
  const [inputvalue, setInputvalue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const getvalues = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return{
        ...inputvalue,
        [name]: value,
      }
    })
  };

  const sentUserdata = async (e) => {
    e.preventDefault();
    const { name, email, message } = inputvalue;

    if (name === "") {
      toast.error("Name is required");
    }
    else if (email === "") {
      toast.error("Email is required");
    }
    else if (!email.includes("@")) {
      toast.error("Invalid email");
    }
    else
    {
      const res = await fetch("https://myportfolio-backend-6pfb.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
      const data = await res.json();
      if (data.status === 201) {
        toast.success("Your Response Submitted");
        setInputvalue({
          ...inputvalue,
          name: "",
          email: "",
          message: ""
        })
      }
    } 
  };

  return (
    <>
      <div id="home" className="home_container">
        <div className="img_container">
          <img
            src="darshaan.jpeg"
            alt="Darshaan's pic"
            className="responsive-image"
          />
        </div>
        <div>
          <p className="text-center" style={{ color: "#666", letterSpacing: "2px", marginTop: 2 }}>
          I am currently pursuing a degree in Computer Science and Engineering
            at Karpagam College of Engineering, where I am passionately
            developing my skills in programming and web development. Proficient
            in languages like C++, C, Java and Python, I have experience with
            front-end technologies such as HTML, CSS, JavaScript, and React. My
            knowledge extends to database management with MySQL and MongoDB,
            allowing me to tackle diverse technical challenges. During my
            internship at Customer Centria in Marketing Automation Technology
            and Analytics, I sharpened my analytical skills, particularly with
            Tableau. In addition to my studies, I manage a YouTube channel
            dedicated to entrepreneurship, money management, current affairs,
            and tech, which has attracted over 9,000 views—showcasing my
            commitment to sharing knowledge. I have completed exciting projects
            that highlight my technical abilities: Tic Tac Toe: A fun,
            interactive game crafted with HTML, CSS, and JavaScript, showcasing
            my front-end development skills. Currency Converter: A user-friendly
            application built using HTML, CSS, and JavaScript, incorporating
            Currency API and Flags API for currency conversion. I am passionate
            about using technology to solve real-world problems and am eager to
            connect with like-minded professionals in the tech industry. Let us
            collaborate and innovate together!
          </p>
        </div>
      </div>
      <div id="projects">
        <h2 className="text-center mt-2">Projects</h2>
        <div className="card">
          <div className="row d-flex justify-content-around align-items-center">
            {projectData.map((el, index) => (
              <Card key={index} style={{ width: "20rem", height: "18rem" }} className="mt-4 mb-4">
                <Card.Img variant="top" style={{ width: "20rem", marginLeft: -13 }} src={el.imgsrc} />
                <Card.Body className="d-flex justify-content-center flex-column">
                  <Card.Title className="text-center">{el.projectName}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                  <Button variant="primary">
                    <a href={el.demo} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light">Try it out!</a>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div id="skills">
        <h2 className="text-center mt-2">Skills</h2>
        <Container className="mt-4">
          <Row className="mt-20">
            <Col xs={12} md={4} className="d-flex flex-column align-items-center">
              <h3>Languages</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>C</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
                <ListGroup.Item>Python - Basic</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>SQL</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center"
            >
              <h3>Frameworks</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Express</ListGroup.Item>
                <ListGroup.Item>MongoDB</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center"
            >
              <h3>Tools and Software</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Tableau</ListGroup.Item>
                <ListGroup.Item>MySQL</ListGroup.Item>
                <ListGroup.Item>VS Code</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <p className="text-center mt-2"><b>I also have a <a href="http://www.youtube.com/@darshaan" target="_blank" rel="noopener noreferrer">YouTube channel</a> dedicated to Current Affairs, money management and technology</b></p>
      </div>
      <div id="contact">
        <h2 className="text-center mt-2">Contact</h2>
        <div className="d-flex justify-content-center">
          <Form className="col-lg-6" onSubmit={sentUserdata}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={inputvalue.name} placeholder="Enter your name" onChange={getvalues} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={inputvalue.email} onChange={getvalues} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" placeholder="Enter your message" value={inputvalue.message} onChange={getvalues} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="mb-3 mb-md-5" variant="primary" type="submit" onClick={sentUserdata}>Submit</Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Content;
