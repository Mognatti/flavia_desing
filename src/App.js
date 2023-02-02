import Calendario from './Componentes/Calendario';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import { useState } from 'react';

function App() {

  const [clientes, setClientes] = useState([])

    const addNovaCliente = (cliente) => {
      setClientes([...clientes, cliente])
      console.log(cliente)
      console.log(clientes)

    }

  return(
    <>
      <Header/>
      <Formulario addNovaCliente={cliente => addNovaCliente(cliente)}/>
      <Calendario/>
    </>
  );
}

export default App;
