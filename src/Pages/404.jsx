
import '../Styles/404.css'

function Error() {
    return (
      <div className='ErrorContainer'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <ul>
            <li>
                <a href={`/`}>Retourner sur la page d’accueil</a>
            </li>
        </ul>
      </div>
    )  
  }
    
  export default Error;