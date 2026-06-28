import Navbar from './components/Navbar'
import ParticuleBackground from './components/Fondo'
import './App.css'

function App() {
  return (
    <>
    
    <ParticuleBackground />

    <header className="header">
      <Navbar />
    </header>

    <main className="container">

      <h1>Hola Mundo</h1>
      <p>Desarrollador Web</p>
      
      
    </main>

    <footer className='footer'>
      <p>Footer</p>
    </footer>

    </>
  )
}

export default App
