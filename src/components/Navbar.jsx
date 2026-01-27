import { useContext, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/Context';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  return (
    <Navbar 
      className={`my-navbar-custom navbar-dark shadow-sm`} 
      expand="lg" 
      fixed="top"
      expanded={expanded} 
      onToggle={(nextExpanded) => setExpanded(nextExpanded)} 
      style={{ transition: 'all 0.4s ease', padding: '0.8rem 0' }}
    >
      <Container>
        {/* Marca con fuente Poppins (vía CSS) y un toque de espaciado */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold fs-4 text-white" 
          onClick={closeMenu}
          style={{ letterSpacing: '1px' }}
        >
          Mi<span style={{ color: '#646cff' }}>Portfolio</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Los Nav.Link ahora heredan el estilo limpio del CSS */}
            <Nav.Link as={Link} to="/" className="mx-2" onClick={closeMenu}>
              Inicio
            </Nav.Link>
            
            <Nav.Link as={Link} to="/sobre-mi" className="mx-2" onClick={closeMenu}>
              Sobre Mí
            </Nav.Link>
            
            <Nav.Link as={Link} to="/proyectos" className="mx-2" onClick={closeMenu}>
              Proyectos
            </Nav.Link>
            
            <Nav.Link as={Link} to="/contacto" className="mx-2" onClick={closeMenu}>
              Contacto
            </Nav.Link>
            
            {/* Botón de cambio de tema mejorado */}
            <Button 
              variant="link" 
              onClick={() => {
                toggleTheme();
                closeMenu();
              }} 
              className={`ms-lg-3 mt-2 mt-lg-0 p-2 rounded-circle theme-btn-hover`}
              style={{ color: isDarkMode ? '#f1c40f' : '#f39c12', transition: '0.3s' }}
            >
              {isDarkMode ? <BsSun size={22} /> : <BsMoonStarsFill size={20} />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;