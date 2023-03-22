import { useState } from "react"




const PokeLista = () =>{
    const [lista, setlista] = useState([])

    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((res) => res.json() )
            .then((data) => {
                setlista(data)
            })
            .catch((error) => {
                console.log(error)
            })

    },[])

    return (
        <div className="container my-5">
            <h2>Poke lista</h2>

            <div className="row">

            </div>
        </div>
    )
}