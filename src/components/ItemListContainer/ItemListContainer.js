import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'
import useProductos from './useProductos'

const ItemListContainer = () => {

    const {productos, loading} = useProductos()

    return (
        <div className="container my-5">
            {loading
                ? <Loader />
                : <ItemList items={productos} />
            }

        </div>
    )
}

export default ItemListContainer

//key= si o si lo tiene que tener, es un control interno de React para optimizar la lectura del listado


    // const promesa = new Promise((resolve, reject) =>{
    //     setTimeout(() =>{
    //         resolve("Promesa resuelta")
            
    //     }, 2000)//ahora es asincronico, se resolverá 2 segundos después
    // })
//con el .then, la promesa se ejecuta cuando es resuelta
    
