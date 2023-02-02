import { useState } from 'react'
import CampoForm from '../CampoForm'
import './Formulario.css'

export default function Formulario({addNovaCliente}) {

    const [nome, setNome] =useState('')
    const [idade, setIdade] =useState('')
    const [ultimaVisita, setUltimaVisita] =useState('')
    const [ultimoServico, setUltimoServico] =useState('')


    const onSubmit = (e)=>{
        e.preventDefault()
        addNovaCliente({
            nome,
            idade,
            ultimaVisita,
            ultimoServico
        })
        console.log(nome, idade, ultimaVisita, ultimoServico)
        
    }

    return(
        <section className='formulario'>
            <form onSubmit={onSubmit}>
                <div className='titulo'>
                    <h3>Cadastro de Cliente:</h3>
                    <h4>Preencha os campos para cadastrar um novo card de cliente</h4>
                </div>
                <div>
                    <CampoForm label='Nome' valor={nome} seter={valor => setNome(valor)}></CampoForm>
                    <CampoForm label='Idade' valor={idade} seter={valor => setIdade(valor)}></CampoForm>
                    <CampoForm label='Data da última visita' valor={ultimaVisita} seter={valor => setUltimaVisita(valor)}></CampoForm>
                    <CampoForm label='Último serviço realizado' valor={ultimoServico} seter={valor => setUltimoServico(valor)}></CampoForm>
                </div>
                <div className='botao'>
                    <button>Salvar Cliente</button>
                </div>
            </form>
        </section>
    )
}