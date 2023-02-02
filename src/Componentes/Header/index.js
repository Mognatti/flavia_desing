import './Header.css'

export default function Header(){
    return(
        <header className='header'>
            <img src='' alt='logo' className='Logo'/>
            <nav className='nav'>
                <ul>
                    <li><a href='/'> Calendário </a></li>
                    <li><a href='/'> Clientes </a></li>
                    <li><a href='https://www.instagram.com/flaviacaparelli_designer/'  target="_blank"  rel='noopener noreferrer'>
                        Instagram 
                    </a></li>
                </ul>
            </nav>
        </header>
    )

}