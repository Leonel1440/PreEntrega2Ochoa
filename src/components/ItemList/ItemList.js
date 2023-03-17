

// export const Itemlist = ({items}) =>{

//     return (
//         <div className='container my-5'>
//              <h2 className='list-container__title'>ItemListContainer</h2>
//              <hr/>
//              <div className='row'>
//                 {items.map(producto => <items key={producto.id} item={producto}/>)}       
//              </div>
//         </div>
//     )
// }

// export default Itemlist


import Item from "../Item/Item"



const ItemList = ( {items} ) => {

    return (
        <div>
            <h2 className="list-container__title">Productos</h2>
            <hr/>

            <div className='row'>
                { items.map((producto) => <Item key={producto.id} item={producto}/>) }
            </div>
        </div>
    )
}

export default ItemList 