import '../Styles/Card.css'
import '../Pages/Home'

function Card(props) {
  
    return (
      <div>
        {/* <h1>{props.key}</h1> */}
        <h2>{props.title}</h2>
        <img src={props.cover} alt='cover'/>
        <img src={props.pictures} alt='picture'/>
        <p>{props.description}</p>
        {/* <p>{props.host}</p> */}
        <p>{props.rating}</p>
        <p>{props.location}</p>
        <p>{props.equipments}</p>
        <p>{props.tags}</p>
      </div>
    );
  }
  
  export default Card;
  