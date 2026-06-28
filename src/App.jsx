import Navbar from './components/Navbar'
import ParticuleBackground from './components/Fondo'
import './App.css'

function App() {
  return (
    <>
    
    <ParticuleBackground />
    <Navbar />

    <main className="container">
      <div className="container-main">
        <h1 className='container-main-title'>Hola Mundo</h1>
        <p className='container-main-description'>Desarrollador Web</p>
      </div>
    </main>

    </>
  )
}

export default App
