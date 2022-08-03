import React, { useContext, useState } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)
    
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2/>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}


export default function MiComponenteConContext() {

    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
                token: 'WSX123456789',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
            <Componente1/>
            <button onClick={actualizarSesion}>Actualizar sesion</button>
        </miContexto.Provider>
    )
}



