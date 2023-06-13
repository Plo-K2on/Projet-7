
import '../Styles/Navigation.css'

export default function Navigation() {
    return(
        <nav className='NavContainer'>
            <img src={require('../Assets/Images/LogoNav.png')} alt="Logo"/>
            <ul className='NavMenu'>
                <li>
                    <a href={`/`}>Accueil</a>
                </li>
                <li>
                    <a href={`/Propos`}>A propos</a>
                </li>
            </ul>
        </nav>
    )
}

