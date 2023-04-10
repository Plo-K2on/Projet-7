import '../Styles/Card.css'
import '../Pages/Home'

function Card(props) {
  
    return (
      <div className='card'>
        <a href={`/fiche/${props.id}`}>
          <h2>{props.title}</h2>
          {/* <img src={props.cover} alt='cover'/>*/}
        </a>
      </div>
    );
  }
  
  export default Card;
  