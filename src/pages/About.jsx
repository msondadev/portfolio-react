import { Container, Row, Col, Card , Button} from 'react-bootstrap';
import styled from 'styled-components';
import { FaGraduationCap, FaCode, FaLightbulb, FaDownload } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/Context';

// Estilo para la imagen de perfil
const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Columna Izquierda: Imagen y redes rápidas */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <ProfileImage 
            src="/mds-px7.1.jpg" // Aquí pondrás tu avatar después
            alt="Tu Nombre" 
          />
          <div className="mt-3">
            <h3 className="fw-bold">Martin</h3>
            <p className="text-primary fw-bold">Desarrollador de Software</p>

            {/* BOTÓN DE CV */}
            <div className="mt-5">
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="rounded-pill px-4 shadow-sm fw-bold"
                href="/C.V..pdf" // Aquí pones el nombre de tu archivo en la carpeta public
                download="CV_Martin-Sonda.pdf"
              >
                <FaDownload className="me-2" /> Descargar CV
              </Button>
            </div>

          </div>
        </Col>

        {/* Columna Derecha: Información detallada */}
        <Col md={7}>
          <h1 className="mb-4">Sobre Mí</h1>
          <p className="lead">
          <strong>Desarrollo de Software</strong> en formación, con sólida base técnica y más de 13 años de experiencia previa en entornos tecnológicos, soporte técnico, sistemas y redes. Enfocado en desarrollo web, automatización y bases de datos.
          </p>
          
          <Row className="mt-4">
            <Col sm={12} className="mb-3">
              <div className="d-flex align-items-start">
                <FaGraduationCap className="me-3 text-primary h3" />
                <div>
                  <h5>Educación</h5>
                  <p className={isDarkMode ? 'text-light' : 'text-muted'}>Estudiante de <strong>Desarrollo de Software</strong> en Instituto Sup. de Formación Técnica N°12 (2024 – En curso).</p>
                </div>
              </div>
            </Col>
            
            <Col sm={12} className="mb-3">
              <div className="d-flex align-items-start">
                <FaCode className="me-3 text-primary h3" />
                <div>
                  <h5>Stack Técnico</h5>
                  <p className={isDarkMode ? 'text-light' : 'text-muted'}>Conocimientos en Angular y React para el Frontend y Java (Spring Boot) para el Backend.</p>
                </div>
              </div>
            </Col>

            <Col sm={12} className="mb-3">
              <div className="d-flex align-items-start">
                <FaLightbulb className="me-3 text-primary h3" />
                <div>
                  <h5>Objetivo</h5>
                  <p className={isDarkMode ? 'text-light' : 'text-muted'}>Busco mi primera oportunidad profesional para aportar valor en proyectos reales y seguir creciendo como desarrollador.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};