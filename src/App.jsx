import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskList from './components/container/TaskList'
import Ejemplo1 from './hooks/Ejemplo1.jsx'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContext from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'

function App() {

  return (
    <div className="App">
      {/* <TaskList/> */}
      {/* <Ejemplo1/> */}
      {/* <Ejemplo2/> */}
      {/* <MiComponenteConContext/> */}
      <Ejemplo4 nombre="Miguel">
        <h3>Contenido del prop.children</h3>
      </Ejemplo4>
    </div>
  )
}

export default App
