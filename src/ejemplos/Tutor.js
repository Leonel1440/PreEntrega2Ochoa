


export const Tutor = ({nombre, curso, comision, edad}) =>{

    // console.log(props)

    // const {nombre, curso, comision, edad} = props

    return (
        <div>
            <h4>{nombre}</h4>
            <p>Curso: {curso}</p>
            <p>Comisión: {comision}</p>
            <p>Edad: {edad}</p>
        </div>
    //     <div>
    //     <h4>{props.nombre}</h4>
    //     <p>Curso: {props.curso}</p>
    //     <p>Comisión: {props.comision}</p>
    //     <p>Edad: {props.edad}</p>
    // </div>
    )
}

//como los componentes son funciones, los puedo reutilizar cambiando algunas cositas