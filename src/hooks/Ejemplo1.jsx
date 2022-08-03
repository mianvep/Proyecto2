import React, { useState } from 'react';

const EJEMPLO1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Miguel',
        email: 'miguel@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial)

    const [persona, setPersona] = useState(personaInicial)

    function incrementarContador() {
        setContador(contador + 1)
    }

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Angel',
                email: 'angel@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de usestate</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>Email: {persona.email}</h4>
            <button onClick={incrementarContador} >Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default EJEMPLO1;
