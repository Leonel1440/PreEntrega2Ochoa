import { useState, useEffect} from "react"

const Clicker = ()=> {
    // let contador = 0
    //const + [estado + función que modifica el estado ]= useState ()
    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState ("Hola mundo")






    const sumarClick = () => {
        setCounter( counter + 1)
    }
    const restarClick = () => {
        setCounter( counter - 1)
    }
    const handleSaludo = () =>{
        if (saludo === "Hola mundo"){
            setSaludo("Chau mundo")
        }else{
            setSaludo("Hola mundo")
        }
    }





    useEffect(() =>{
        console.log("MONTAJE")

        return () => {
            console.log("DESMONTAJE")
        }
    }, [])//sin nada en [], es montaje y desmontaje

    useEffect(() =>{
        console.log("Efecto de actualización")
        localStorage.setItem('counter', counter)

        return () =>{
            console.log("Efecto desmontaje counter")
        }
    }, [counter])

//se dispara el efecto cada vez que escuche un cambio en counter, porque lo incluimos en el []
 //EL USEEFFECT SIRVE PARA EJECUTAR ALGO, siempre se dispara en montaje(al actualizar la pagina)






    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>

            <p>Clicks: {counter}</p>
            <p>FyH: {new Date().toLocaleString()}</p>

            <button onClick={sumarClick} className="btn btn-primary">Sumar</button>
            <button onClick={restarClick} className="btn btn-primary">Restar</button>
            <p>{saludo}</p>
            <button onClick={handleSaludo} className="btn btn-primary">Cambiar saludo</button>
        </div>
    )
}

export default Clicker