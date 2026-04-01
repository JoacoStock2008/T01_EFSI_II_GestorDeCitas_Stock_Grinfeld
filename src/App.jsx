import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header.jsx'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="root">
        <Header />
        <div className="container">
          <div className="row">
            <Formulario />
            <Listado />
          </div>
        </div>
       
      </div>   
  )
}

export default App