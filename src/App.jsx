import { useEffect } from 'react'
import Navbar from './components/JAVA/Navbar'
import ParticuleBackground from './components/JAVA/Fondo'
import './App.css'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const progressEl = document.getElementById('Progres');
      if (progressEl) {
        progressEl.style.width = (s / (h || 1)) * 100 + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="void" id="Progres"></div>

      <ParticuleBackground />

      <header className="header">
        <Navbar />
      </header>

      <main className="container">
        {/* --- Sección de Inicio (Hero) --- */}
        <section id="Inicio" className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">Disponible para Trabajar</span>
            <h1>Web Developer</h1>
            <h2 className="hero-name">Jean Luc Goncalvez Cumare</h2>
            <p className="hero-subtitle">
              Full Stack Developer & Estudiante de Ingeniería en Sistemas. Especializado en crear aplicaciones web modernas, robustas y de alto impacto visual con tecnologías de vanguardia.
            </p>
            <div className="hero-buttons">
              <a href="https://www.linkedin.com/in/jean-luc-goncalvez-cumare-5b127415a/" target="_blank" rel="noopener noreferrer" className="btn-habilidades">
                LinkedIn
              </a>
              <a href="https://github.com/ArT0Rs" target="_blank" rel="noopener noreferrer" className="btn-habilidades">
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-avatar-container">
            <div className="hero-avatar-glow"></div>
            <div className="foto-perfil-container">
              <img src="./jean.jpg" alt="Jean Luc Goncalvez Cumare" className="foto-perfil" />
            </div>
          </div>
        </section>

        {/* --- Sección de Servicios --- */}
        <section id="Servicios">
          <h2 className="section-title">Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <div className="service-card-info">
                <h3>Desarrollo Frontend</h3>
                <p>Diseño y maquetación de interfaces web modernas y responsivas utilizando React, Javascript (ES6+), HTML5 y CSS3 avanzado.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <div className="service-card-info">
                <h3>Desarrollo Backend</h3>
                <p>Construcción de APIs robustas y escalables con Node.js, Express y bases de datos relacionales y no relacionales.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <div className="service-card-info">
                <h3>Diseño UI/UX</h3>
                <p>Creación de prototipos dinámicos, flujos de experiencia interactiva y sistemas de diseño con excelente pulido estético.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">📐</div>
              <div className="service-card-info">
                <h3>Ingeniería de Sistemas</h3>
                <p>Planificación de arquitectura de software, análisis de requerimientos del cliente e integración eficiente de sistemas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Sección de Tecnologías --- */}
        <section id="Tecnologias">
          <h2 className="section-title">Tecnologías</h2>
          
          <div className="tech-category">
            <h3 className="tech-category-title">Stack Principal / Especialidad</h3>
            <div className="tech-grid">
              <div className="tech-badge">
                <div className="tech-icon">⚛️</div>
                <span className="tech-name">React</span>
              </div>
              <div className="tech-badge">
                <div className="tech-icon">🟨</div>
                <span className="tech-name">JavaScript</span>
              </div>
              <div className="tech-badge">
                <div className="tech-icon">🎨</div>
                <span className="tech-name">CSS3</span>
              </div>
              <div className="tech-badge">
                <div className="tech-icon">📄</div>
                <span className="tech-name">HTML5</span>
              </div>
              <div className="tech-badge">
                <div className="tech-icon">🐙</div>
                <span className="tech-name">Git</span>
              </div>
            </div>
          </div>

          <div className="tech-category">
            <h3 className="tech-category-title">Desarrollo de Software & Backend</h3>
            <div className="tech-grid">
              <div className="tech-badge">
                <div className="tech-icon">🟢</div>
                <span className="tech-name">Node.js</span>
              </div>
              <div className="tech-badge">
                <div className="tech-icon">🛢️</div>
                <span className="tech-name">SQL</span>
              </div>
              <div className="tech-badge">
                <div className="tech-icon">🐍</div>
                <span className="tech-name">Python</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- Sección de Proyectos (Estilo Galería 3D Flip) --- */}
        <section id="Proyectos">
          <h2 className="section-title">Proyectos Destacados</h2>
          <div className="gallery-container">
            
            <div className="wrapper">
              <div className="card">
                <div className="front-page">
                  <img src="./412472.jpg" alt="E-commerce Platform" />
                  <div className="front-page-content">
                    <h2>E-commerce Platform</h2>
                  </div>
                </div>
                <div className="back-page">
                  <h3 className="card-title">E-commerce Platform</h3>
                  <p className="card-description">
                    Una plataforma completa de comercio electrónico que integra pasarela de pagos, panel de control de inventario y analíticas detalladas.
                  </p>
                  <div className="card-tags">
                    <span className="card-tag">React</span>
                    <span className="card-tag">Node.js</span>
                    <span className="card-tag">Express</span>
                    <span className="card-tag">SQL</span>
                  </div>
                  <button className="card-button" onClick={() => window.open("#", "_blank")}>Ver Proyecto</button>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <div className="card">
                <div className="front-page">
                  <img src="./412472.jpg" alt="Task Manager" />
                  <div className="front-page-content">
                    <h2>Task Manager</h2>
                  </div>
                </div>
                <div className="back-page">
                  <h3 className="card-title">Task Manager</h3>
                  <p className="card-description">
                    Gestor de tareas colaborativo con tableros estilo Kanban en tiempo real, notificaciones push y asignación automatizada de metas.
                  </p>
                  <div className="card-tags">
                    <span className="card-tag">React</span>
                    <span className="card-tag">Socket.io</span>
                    <span className="card-tag">PostgreSQL</span>
                    <span className="card-tag">Tailwind</span>
                  </div>
                  <button className="card-button" onClick={() => window.open("#", "_blank")}>Ver Proyecto</button>
                </div>
              </div>
            </div>
            
            <div className="wrapper">
              <div className="card">
                <div className="front-page">
                  <img src="./412472.jpg" alt="Task Manager" />
                  <div className="front-page-content">
                    <h2>Task Manager</h2>
                  </div>
                </div>
                <div className="back-page">
                  <h3 className="card-title">Task Manager</h3>
                  <p className="card-description">
                    Gestor de tareas colaborativo con tableros estilo Kanban en tiempo real, notificaciones push y asignación automatizada de metas.
                  </p>
                  <div className="card-tags">
                    <span className="card-tag">React</span>
                    <span className="card-tag">Socket.io</span>
                    <span className="card-tag">PostgreSQL</span>
                    <span className="card-tag">Tailwind</span>
                  </div>
                  <button className="card-button" onClick={() => window.open("#", "_blank")}>Ver Proyecto</button>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <div className="card">
                <div className="front-page">
                  <img src="./412472.jpg" alt="Task Manager" />
                  <div className="front-page-content">
                    <h2>Task Manager</h2>
                  </div>
                </div>
                <div className="back-page">
                  <h3 className="card-title">Task Manager</h3>
                  <p className="card-description">
                    Gestor de tareas colaborativo con tableros estilo Kanban en tiempo real, notificaciones push y asignación automatizada de metas.
                  </p>
                  <div className="card-tags">
                    <span className="card-tag">React</span>
                    <span className="card-tag">Socket.io</span>
                    <span className="card-tag">PostgreSQL</span>
                    <span className="card-tag">Tailwind</span>
                  </div>
                  <button className="card-button" onClick={() => window.open("#", "_blank")}>Ver Proyecto</button>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <div className="card">
                <div className="front-page">
                  <img src="./412472.jpg" alt="Glassmorphic Portfolio" />
                  <div className="front-page-content">
                    <h2>Glassmorphic Portfolio</h2>
                  </div>
                </div>
                <div className="back-page">
                  <h3 className="card-title">Glassmorphic Portfolio</h3>
                  <p className="card-description">
                    Portafolio dinámico de alta fidelidad visual y responsive, con fondo interactivo de partículas en Canvas y layouts fluidos.
                  </p>
                  <div className="card-tags">
                    <span className="card-tag">React</span>
                    <span className="card-tag">HTML5 Canvas</span>
                    <span className="card-tag">CSS3</span>
                  </div>
                  <button className="card-button" onClick={() => window.open("#", "_blank")}>Ver Proyecto</button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- Sección de Contacto --- */}
        <section id="Contacto">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" placeholder="Tu nombre y apellido" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" placeholder="ejemplo@correo.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
              </div>
              <button type="submit" className="btn-habilidades contact-submit">Enviar Mensaje</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="#Inicio">Inicio</a>
          <a href="#Servicios">Servicios</a>
          <a href="#Tecnologias">Tecnologías</a>
          <a href="#Proyectos">Proyectos</a>
          <a href="#Contacto">Contacto</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Jean Luc Goncalvez Cumare. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
