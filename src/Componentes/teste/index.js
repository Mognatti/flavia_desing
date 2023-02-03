import { useState } from "react";
import CampoForm from "../CampoForm";

export default function Teste (){
    
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [clientes, setClientes] = useState([])

    const aoEnviado = (e) => {
        const cliente = {nome, telefone};
        e.preventDefault();
        setClientes([...clientes, cliente]);
        console.log(cliente)
        console.log(clientes);
        setNome('')
        setTelefone('')
    }


    return(
        <form onSubmit={aoEnviado}>
            <div>
                <h4>Preencha os campos abaixo:</h4>
            </div>
            <div>
                <CampoForm label='Nome' valor={nome} seter={valor => setNome(valor)}/>
                <CampoForm label='Telefone' valor={telefone} seter={(valor => setTelefone(valor))}/>
            </div>
            <div>
                <button>
                    Submit
                </button>
            </div>
        </form>
    )

}