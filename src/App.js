import Calendario from './Componentes/Calendario';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  useEffect(() => {document.title = 'Flávia Desgin'}, [])

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/clientes')
    .then(resposta => resposta.json())
    .then(registradas => setClientes(registradas))
  }, [])

    const addNovaCliente = (cliente) => {
      setClientes([...clientes, cliente])
      console.log(cliente)
      console.log(clientes)

    }

  return(
    <div className='app'>
      <Header/>
      <div className='form'>
        <Formulario addNovaCliente={cliente => addNovaCliente(cliente)}/>
        <ul>
          {clientes.map(cliente => <li key={cliente.nome}>{cliente.nome}</li>)}
        </ul>
      </div>
      <Calendario/>
    </div>
    
  );
}

export default App;
