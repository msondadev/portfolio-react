import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 3rem 0; /* Un poco más de aire */
  margin-top: auto;
  
  /* Sincronizamos con el color Navy del Navbar */
  background-color: #0f172a; 
  
  /* El texto siempre será claro para que resalte sobre el azul oscuro */
  color: rgba(255, 255, 255, 0.9);
  
  /* Un borde sutil solo para dar profundidad */
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s ease;
`;

const SocialLink = styled.a`
  font-size: 1.6rem;
  margin: 0 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  transition: transform 0.3s ease, color 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-5px);
    /* Usamos el color de acento de Vite/React para el hover */
    color: #646cff; 
  }
`;

const FooterText = styled.p`
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterWrapper className="my-footer-custom">
      <Container className="text-center">
        <div className="mb-4">
          <SocialLink href="https://github.com/msondadev" target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/martinsonda" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:tu-email@gmail.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
        </div>
        
        <FooterText className="mb-1 fw-bold">
          © {new Date().getFullYear()} — Martin Sonda
        </FooterText>
        
        <FooterText className="small mb-0" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
          Desarrollado con <span style={{ color: '#61dbfb' }}>React</span> + <span style={{ color: '#764ba2' }}>Bootstrap</span>
        </FooterText>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;