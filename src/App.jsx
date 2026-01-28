import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/Context'; 
import Navigation from './components/Navbar';
import Footer from './components/Footer'; 
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    
      <div className={`d-flex flex-column min-vh-100 w-100 ${isDarkMode ? 'main-bg-dark' : 'main-bg-light'}`}>
        
        <Navigation /> 
        
        {/* ESTE DIV 'container' SOLO envuelve las rutas. Al no envolver al Footer, 
        el Footer puede ser libre y medir el 100%. */}
        <div className="container flex-grow-1" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>

        {/* Le pasamos el modo al Footer */}
        <Footer isDarkMode={isDarkMode} />
        
      </div>
    
  );
}

export default App;