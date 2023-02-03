import "./Servicos.css";

export default function Servicos({ label, valor, setter }) {
  const servicos = [
    "Design Simples",
    "Design com Rena",
    "Micropigmentação (Shadow)",
    "Micropigmentação (Fio a Fio)",
    "Micropigmentação (Retoque)",
  ];

  const aoEnviar = (novoValor, servicoSelecionado) => {
    setter(novoValor, servicoSelecionado);
  };

  return (
    <div>
      <label> {label} </label> <br />
      {servicos.map((servico) => {
        return (
          <div key={servico} className="servicos">
            <label htmlFor={servico}>
              <input
                style={{ marginRight: 10 }}
                id={servico}
                name="Serviços"
                type="checkbox"
                checked={valor.includes(servico)}
                onChange={(e) => aoEnviar(e.target.checked, servico)}
              />
              {servico}
            </label>
          </div>
        );
      })}
    </div>
  );
}
