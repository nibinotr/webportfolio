

import React, { useState } from 'react';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';

function App() {
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <Container fluid>
      {/* Centered Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
        <Container>
          <Nav className="mx-auto text-center">
            <Navbar.Brand style={{ color: 'white' }}>Nibin - MERN Stack Developer</Navbar.Brand>
            <Nav.Link href="#profile" style={{ color: 'white' }}>Profile</Nav.Link>
            <Nav.Link href="#skills" style={{ color: 'white' }}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={{ color: 'white' }}>Projects</Nav.Link>
            <Nav.Link href="#languages" style={{ color: 'white' }}>Languages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Profile Section */}
      <Profile />

      {/* Centered Buttons with Auto Width */}
      <Row className="justify-content-center my-3">
        <Button
          variant="primary"
          className="m-2 w-auto"
          onClick={() => setShowSkills(!showSkills)}
        >
          Show Skills
        </Button>
        <Button
          variant="primary"
          className="m-2 w-auto"
          onClick={() => setShowProjects(!showProjects)}
        >
          Show Projects
        </Button>
        <Button
          variant="primary"
          className="m-2 w-auto"
          onClick={() => setShowLanguages(!showLanguages)}
        >
          Show Languages
        </Button>
      </Row>

      {/* Conditional Rendering of Sections */}
      <Row>
        <Col xs={12} md={8} lg={6} className="mx-auto">
          {showSkills && <Skills />}
          {showProjects && <Projects />}
          {showLanguages && <Languages />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;


