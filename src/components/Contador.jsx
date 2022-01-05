import React from 'react'

function Contador() {

    const [contador, setContador] = React.useState(0);
    // const aumentar = () =>{
    //     console.log('click');
    //     setContador(contador + 1)  //toma el estado inicial del contador(0) y suma el numero que le indican
    // } para ahorrar linea de codigos , se lo puede llamar desde el evento onclick, y no crear la funcion aumentar 

    
    return (
        <div>
            <h2>Contador </h2>
            <h3>Numero: { contador }</h3>
            <h4>
                {
                    contador > 2 ?  'Es mayor a 2': 'Es menor a 2'
                }
            </h4>
            <button onClick={()=> setContador(contador + 1)}> Aumentar</button>
        </div>
    )
}

export default Contador
