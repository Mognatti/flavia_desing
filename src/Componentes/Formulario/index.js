import { useState } from "react";
import CampoForm from "../CampoForm";
import Servicos from "../Servicos";
import "./Formulario.css";

export default function Formulario({ addNovaCliente }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ultimaVisita, setUltimaVisita] = useState("");
  const [ultimoServico, setUltimoServico] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    addNovaCliente({
      nome,
      idade,
      telefone,
      ultimaVisita,
      ultimoServico,
    });
    setNome("");
    setIdade("");
    setTelefone("");
    setUltimaVisita("");
    setUltimoServico([]);
    console.log(nome, idade, telefone, ultimaVisita, ultimoServico);
  };

  return (
    <section className="formulario">
      <form onSubmit={onSubmit}>
        <div className="titulo">
          <h3>Cadastro de Cliente:</h3>
          <h4>Preencha os campos para cadastrar um novo card de cliente</h4>
        </div>
        <div>
          <CampoForm
            label="Nome"
            valor={nome}
            seter={(valor) => setNome(valor)}
          ></CampoForm>
          <CampoForm
            label="Idade"
            valor={idade}
            seter={(valor) => setIdade(valor)}
          ></CampoForm>
          <CampoForm
            label="Telefone"
            valor={telefone}
            seter={(valor) => setTelefone(valor)}
          ></CampoForm>
          <CampoForm
            label="Data da última visita"
            tipo="date"
            valor={ultimaVisita}
            seter={(valor) => setUltimaVisita(valor)}
          ></CampoForm>
          <Servicos
            label="Tipo(s) de serviço(s) prestado(s):"
            valor={ultimoServico}
            setter={(novoValor, servicoSelecionado) => {
              if (novoValor === true)
                setUltimoServico([...ultimoServico, servicoSelecionado]);
              else
                setUltimoServico(
                  ultimoServico.filter((s) => s !== servicoSelecionado)
                );
            }}
          />
        </div>
        <div className="botao">
          <button>Salvar Cliente</button>
        </div>
      </form>
    </section>
  );
}
