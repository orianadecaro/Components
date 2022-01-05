import React from 'react'

function Formulario() {

    const [frutas, setFrutas] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [precio, setPrecio] = React.useState('');
    const[lista, setLista] = React.useState([]);

    const guardarDatos = (e) =>{
        e.preventDefault();
      
        if(!frutas.trim() || !descripcion.trim() || !precio.trim()){
            console.log(' input vacio');
            return
        } 
         console.log('prosesando datos');

         e.target.reset();//limpia los inputs
         setLista([
             ...lista, // se usa ... xq si existe un elemento, no lo elimina
             {nombreFruta: frutas, nombreDescripcion: descripcion, nombrePrecio: precio}// creamos un n uevo elemento propiedad y valor
         ])
         setFrutas(''); //reset al valor inicial
         setDescripcion('');
         setPrecio('');

    }

    return (
        <div>
            <h2>Formulario </h2>
            <form onSubmit={guardarDatos}>
                <input
                    type = 'text'
                    placeholder='Ingrese una fruta'
                    className='form-control  mb-2'
                    onChange ={(e) =>setFrutas(e.target.value)}
                />
                <input
                    type = 'text'
                    placeholder='Ingrese Descripcion'
                    className='form-control  mb-2'
                    onChange ={(e) =>setDescripcion(e.target.value)}
                />
                <input
                    type = 'number'
                    placeholder='Ingrese Precio'
                    className='form-control  mb-2'
                    onChange ={(e) =>setPrecio(e.target.value)}
                />
                <button className="btn btn-primary btn-block"  type='submit'>Agregar</button>
                <ul>
                    {
                        lista.map((item, index)=>(
                        <li key={index}>
                                {item.nombreFruta} -  {item.nombreDescripcion} - {item.nombrePrecio}
                        </li>
                            
                    ))// li es lo que se va a recorrer
                    }

                </ul>
            </form>
        </div>
    )
}

export default Formulario
