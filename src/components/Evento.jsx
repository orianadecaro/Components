import React,{Fragment, useState} from 'react'

function Evento() {
    const [texto, setTexto] = useState('Texto desde estado');

    const eventoClick =()=>{
        console.log('Diste click')
        setTexto('cambiando texto...');
    }
    return (
        <Fragment>
            <hr />  {/*(para hacer linea ) */}
            <h2>Evento  {texto}</h2>
            <button onClick={()=> eventoClick()}>Click</button>
       </Fragment> 
    )
}

export default Evento
