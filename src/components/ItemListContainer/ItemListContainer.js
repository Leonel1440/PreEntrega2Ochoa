import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import Itemlist from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'


export const ItemListContainer = ({greeting}) =>{

    const [productos, setProductos] = useState([])
    // console.log(productos)
    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams()

    // es un componente contenedor:
    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then((res)=>{
                if(categoryId) {
                    setProductos( res.filter((prod) => prod.category === categoryId) )

                } else{
                    setProductos(res)
                }
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])

    // es un componente de presentación:
    return (
        <div className='container my-5'>

            {
                loading
                    ? <h2>Cargando...</h2>
                    : <Itemlist items={productos}/>
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
    
