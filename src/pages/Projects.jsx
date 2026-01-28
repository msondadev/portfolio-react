import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

import { projects } from '../data/proyectos'; 

export const Projects = () => {

  return (
    <Container className="py-5" style={{ minHeight: '80vh' }}>
      <h1 className="text-center mb-5 fw-bold">
        Mis <span className="text-gradient">Proyectos</span>
      </h1>
      
      <Row className="g-4"> 
        {projects.map((proyecto) => (
          <Col key={proyecto.id} xs={12} md={6} lg={4} className="mb-4 d-flex">
            <ProjectCard proyecto={proyecto} />
          </Col>
        ))}
      </Row>
      
      {projects.length === 0 && (
        <p className="text-center text-muted">Próximamente más proyectos...</p>
      )}
    </Container>
  );
};