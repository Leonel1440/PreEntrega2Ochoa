import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = ({red}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : 'darkcyan'}}>
            <div className="header__container">
                <img src='https://images.vexels.com/media/users/3/223412/isolated/preview/bd3704cf52ba23499660b8bae7221daf-dise-o-plano-de-icono-de-tienda.png' className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/mochila' className="navbar__link">Mochilas</Link>
                    <Link to='/productos/cartucheras' className="navbar__link">Cartucheras</Link>
                    <Link to='/productos/lapiceras' className="navbar__link">Lapiceras</Link>
                    <Link to='/productos/cuadernos' className="navbar__link">Cuadernos</Link>
                    <Link to='/productos/borrador' className="navbar__link">Borradores</Link>
                </nav>

                <CartWidget />
            </div>

            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}