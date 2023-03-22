import { Tutores } from "./tutores";



export const Noticias = ({children}) =>{

    return(
        <section>
            <h2>noticias</h2>
            <hr/>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            
            {children}
        </section>
    )
};