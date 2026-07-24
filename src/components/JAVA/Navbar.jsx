import '../CSS/Navbar.css';

const Navbar = () => {

    return (
        <nav className='container-nav'>
        <div className='nav-links'>
            <a href="#Inicio">Inicio</a>
            <a href="#Servicios">Servicios</a>
            <a href="#Proyectos">Proyectos</a>
            <a href="#Tecnologias">Tecnologías</a>
            <a href="#Contacto">Contacto</a>
        </div>
        </nav>
    );
};

export default Navbar;