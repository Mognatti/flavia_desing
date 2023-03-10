import './CampoForm.css'

export default function CampoForm({ label , valor, seter, tipo}){
        
    const onChange = (e) => {
        seter(e.target.value)
    }

    return(
        <div className="campo">
            <label>{label}</label>
            <input onChange={onChange} value={valor} required={true} type={tipo}></input>
        </div>
    )
}