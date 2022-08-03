import React, { useEffect, useRef, useState } from 'react';

const Ejemplo2 = () => {
    
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1) 
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento en el DOM');
    //     console.log(miRef);
    // })

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando referencia a elemento en el DOM');
        console.log(miRef);
    }, [contador1])
    
    

    return (
        <div>
            <h1>Ejemplo de usestate, useref y useefect</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            <h3 ref={miRef}>Ejemplo de elemnto referenciado</h3>
            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
