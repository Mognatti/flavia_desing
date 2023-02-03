import './Cards.css'

export default function Clientes() {
    return(
        <section className='card'>
            <div className='imagem'>
                <img></img>  
            </div>

            <div className='dados'>
                <h5>Nome da Fulana</h5>
                <h5>Telefone da Fulana</h5>
                <h5>Insta da Fulana</h5>
                <textarea>{mensagemPadrao}</textarea>
            </div>

        </section>
    )

}