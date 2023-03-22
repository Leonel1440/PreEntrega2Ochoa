import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = (bool) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            // if (bool) {
                resolve(MOCK_DATA)
            // }else{
            //     reject("promesa rechazada")
            // }
        }, 2000);
    })
}
