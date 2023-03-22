

//Esto es un componente: una función qeu retorna un bloque de jsx
//todo lo qeu es componente en React se escribe en mayusculas y en camelCase.
export const Tutores = () =>{

    return (
        <ul>
            <h2>Tutores</h2>
            <hr/>

            <li>Leo</li>
            <li>Lio</li>
            <li>El diego</li>
        </ul>
    )
}

//los componentes solo pueden retornar (return) un único elemento, por ejemplo el <ul>, pero si yo pusiera por fuera del ul, un h2, ya me tiraría error, así eu conviene dejarlo 