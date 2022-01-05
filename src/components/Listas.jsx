import React, {useState} from 'react'

function Listas() {
    const estadoInicial =[ // array de objetos
        {id: 1, texto: 'tarea 1'},
        {id: 2, texto: 'tarea 2'},
        {id: 3, texto: 'tarea 3'},
    ];

    const [lista, setlista] = useState(estadoInicial);

    // const array1 = ['Chile' ,'ARgentina'];
    // const array2 = ['Peru', 'Mexico'];

    // const unidos = [...array1, ...array2 ];
    // console.log(unidos);

    const agregarElemento = () => {
        console.log('click');
        setlista([// el corchete se usa xq es un array
            ...lista,//toma el estado inicial(copia)y le agrega un nuevo elemento
            {id: 4, texto: 'tarea 4'},
        ])
    }

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map((item, index) => (
                    <h4 key={index} >{item.texto}</h4>
                ))
            }
            <button onClick={()=>agregarElemento()}>Agregar </button>
            
        </div>
    )
}

export default Listas
