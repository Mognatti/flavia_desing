import './Servicos.css'

export default function Servicos({label, valor, seter}){
    
    const servicos = [
        'Design Simples',
        'Design com Rena',
        'Micropigmentação (Shadow)',
        'Micropigmentação (Fio a Fio)',
        'Micropigmentação (Retoque)',
    ]

    const aoEnviar = (e) =>{
        seter(e.target.value)
    }

    return(
        <div className='radio'>
            <label> {label} </label> <br/>
        {servicos.map(servico => {return(<label className='servico' key={servico}> 
            <input  name='Serviços' type='checkbox' value={valor} onChange={aoEnviar}/> {servico} </label>)})}
        </div>
    )

}