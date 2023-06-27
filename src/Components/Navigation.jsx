
import '../Styles/Navigation.css'
import { NavLink } from "react-router-dom";

// export default function Navigation() {
//     return(
//         <nav className='NavContainer'>
//             <img src={require('../Assets/Images/LogoNav.png')} alt="Logo"/>
//             <ul className='NavMenu'>
//                 <li>
//                     <a href={`/`}>Accueil</a>
//                 </li>
//                 <li>
//                     <a href={`/Propos`}>A propos</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

export default function Navigation() {
    return(
        <nav className='NavContainer'>
            <img src={require('../Assets/Images/LogoNav.png')} alt="Logo"/>
            <ul className='NavMenu'>
                <li>
                    <NavLink to={`/`}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to={`/propos`}>A propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}

    
