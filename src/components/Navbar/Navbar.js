
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'
import { Link} from 'react-router-dom'

export const Navbar = ({red}) =>{

    return (
        <header className="header">
            <div className="header__container">
                <img src='https://triunfacontulibro.com/wp-content/uploads/2016/10/icon-libro.png'className="header__logo" id='img-logo' alt='Logo'></img>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/mochila' className="navbar__link">Mochilas</Link>
                    <Link to='/productos/cartucheras' className="navbar__link">Cartucheras</Link>
                    <Link to='/productos/lapiceras' className="navbar__link">Lapiceras</Link>
                    <Link to='/productos/cuadernos' className="navbar__link">Cuadernos</Link>
                    <Link to='/productos/borrador' className="navbar__link">Borradores</Link>
                    {/* <Link to='/nosotros' className="navbar__link">Nosotros</Link> */}
                    {/* <Link to='/pokeapi' className="navbar__link">Pokeapi</Link> */}
                </nav>

                <CartWidget />
            </div>
        </header>

    )
}
