import './CSS/Navbar.css';

const Navbar = () => {

    return (
        <nav className='container-nav'>
        <div className='nav-links'>
            <a href="#">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Proyectos</a>
            <a href="#">Tecnologias</a>
            <a href="#">Contacto</a>
        </div>
        </nav>
    );
};

export default Navbar;