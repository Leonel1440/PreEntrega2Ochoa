
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'
import { Link} from 'react-router-dom'

export const Navbar = ({red}) =>{

    return (
        <header className="header" >
            <div className="header__container">
                <img src='./imgs/libreriaLogo.png'className="header__logo" alt='logo'></img>

                <nav className="navbar">
                    <Link to='/'  className="navbar__link">Inicio</Link>
                    <Link to='/nosotros' lassName="navbar__link">Nosotros</Link>
                    <Link to='/pokeapi' className="navbar__link">Pokeapi</Link>
                </nav>
                <CartWidget />
            </div>
        </header>

    )
}