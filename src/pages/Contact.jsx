import { useState, useRef, useContext } from 'react'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ThemeContext } from '../context/Context';

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_id_ejemplo', 'template_id_ejemplo', formRef.current, 'public_key_ejemplo')
      .then(() => {
        toast.success('¡Mensaje enviado con éxito! 🚀');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error('Hubo un error al enviar.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container className="py-5">
      <ToastContainer position="bottom-right" theme={isDarkMode ? 'dark' : 'light'} />
      
      {/* Título Principal */}
      <h1 className={`text-center mb-5 display-4 fw-bold ${isDarkMode ? 'text-white' : 'text-dark'}`}>
        Contacto
      </h1>
      
      <Row className="justify-content-center">
        {/* Columna del Formulario */}
        <Col md={7} lg={6} className="mb-5 mb-md-0">
          <div className={`p-4 shadow rounded ${isDarkMode ? 'bg-dark border border-secondary' : 'bg-body-tertiary'}`}>
            <h4 className={`mb-4 ${isDarkMode ? 'text-white' : 'text-dark'}`}>Envíame un mensaje</h4>
            
            <Form ref={formRef} onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label className={isDarkMode ? 'text-light' : 'text-dark'}>Nombre</Form.Label>
                <Form.Control type="text" name="user_name" placeholder="Tu nombre" required />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label className={isDarkMode ? 'text-light' : 'text-dark'}>Email</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="nombre@ejemplo.com" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className={isDarkMode ? 'text-light' : 'text-dark'}>Mensaje</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Escribe tu consulta aquí..." required />
              </Form.Group>

              <div className="d-grid">
                <Button 
                  className={isDarkMode ? "btn-gradient" : "btn-gradient"} // Puedes usar el mismo para ambos o variar
                  type="submit" 
                  size="lg" 
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </div>
            </Form>
          </div>
        </Col>

        {/* Columna de Información de Contacto */}
        <Col md={5} lg={4} className="d-flex flex-column justify-content-center ps-md-5">
          <h3 className={`mb-4 ${isDarkMode ? 'text-white' : 'text-dark'}`}>O encuéntrame en:</h3>
          
          <p className={`lead mb-4 ${isDarkMode ? 'text-light' : 'text-muted'}`}>
            Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades.
          </p>
          
          <div className="d-flex flex-column gap-3">
            <a href="mailto:tuemail@gmail.com" className={`text-decoration-none h5 d-flex align-items-center ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              <FaEnvelope className="me-3 text-danger" /> tuemail@gmail.com
            </a>
            <a href="https://linkedin.com/in/martinsonda" target="_blank" rel="noreferrer" className={`text-decoration-none h5 d-flex align-items-center ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              <FaLinkedin className="me-3 text-primary" /> LinkedIn
            </a>
            <a href="https://github.com/msondadev" target="_blank" rel="noreferrer" className={`text-decoration-none h5 d-flex align-items-center ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              <FaGithub className={`me-3 ${isDarkMode ? 'text-light' : 'text-dark'}`} /> GitHub
            </a>
            <a href="https://wa.me/2215862553" target="_blank" rel="noreferrer" className={`text-decoration-none h5 d-flex align-items-center ${isDarkMode ? 'text-light' : 'text-dark'}`}>
              <FaWhatsapp className="me-3 text-success" /> WhatsApp
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};