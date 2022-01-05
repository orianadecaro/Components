import React from 'react'

function Variables() {

const saludo ='Hola amigo';
const imagen = 'https://www.freepik.es/foto-gratis/playa-tropical_3501168.htm#query=playa&position=1&from_view=keyword';
    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>
            <img src={imagen} alt='' height={80} width={50}/> 
        </div>
    )
}

export default Variables
