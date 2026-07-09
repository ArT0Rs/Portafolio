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
      <section id='home'>
        <br />
        <h1>Hola Mundo</h1>
        <p>Desarrollador Web</p>
        <p>En construccion... </p>
        <br />
      </section>
      
      <div className='wrapper'>
        <div className="card">

          <div className="front-page">
            <h2 className='card-title'>Proyecto 1</h2>
            <p className='card-description'>Proyecto 1</p>
          </div>

          <div className="back-page">
            <div className="card-content">
              <h3>Proyecto 1</h3>
              <p className='card-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id itaque hic earum, voluptates, inventore quod ipsa quia, modi nostrum veniam ea neque obcaecati voluptas quis suscipit adipisci iste minus provident.</p>
              <button className='card-button'>Ver Proyecto</button>
            </div>
          </div>
          
        </div>
      </div>


    </main>

    <footer className='footer'>
      <p>Footer</p>
    </footer>
    </>
  )
}

export default App
