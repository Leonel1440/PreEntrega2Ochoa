import { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalCantidad, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaCartPlus className='cart-icon'/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget




















// import { FaCartPlus} from 'react-icons/fa'
// import './CartWidget.scss'

// const CartWidget = () =>{

//     return (
//         <div className='cart-widget'>
//             <FaCartPlus className='cart-icon'/>
//             <span>0</span>
//         </div>
//     )
// }

// export default CartWidget