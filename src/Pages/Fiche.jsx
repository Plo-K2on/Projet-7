
import '../Styles/Fiche.css'
import '../Components/Collapse.jsx'
import { useParams } from "react-router-dom"
import Collapse from '../Components/Collapse.jsx';
import Logements from '../Mock/logements.json';
import Tag from '../Components/Tag.jsx';
import RedStar from '../Components/RedStar';
import GreyStar from '../Components/GreyStar';
import Caroussel from '../Components/Caroussel';

function Fiche() {
  // récupérer le paramètre id
  const { id } = useParams(); // on utilise la destructuration JS pour récupérer juste l'id
  const logement = Logements.find((logement) => logement.id === id)

  // console.log ('logement', logement);
  const collapseInfo1 = {
    header: "Description",
    content: logement.description
  }
  const collapseInfo2 = {
    header: "Equipments",
    content: logement.equipments
  }

  const renderTag = () =>{
    if(typeof logement.tags === 'string'){
      return logement.tags
    }
    return logement.tags.map((item, i) => {
      return (
        <Tag key={i} info={item}/>
      )
    });
  }

  const disPlayRedStar = () => {
    let elements = [];
    for (let i=0; i < logement.rating; i++){
      elements.push(<RedStar key={i}/>)
    }
    return elements
  }

  const disPlayGreyStar = () => {
    const numberOfGreyStar = 5 - logement.rating
    let elements = [];
    for (let i=0; i < numberOfGreyStar; i++){
      elements.push(<GreyStar key={i}/>)
    }
    return elements
  }

    return (
      <div className='container'>
        <div className='containerCaroussel'>
          <Caroussel pictures={logement.pictures}/>
        </div>
        <div className='containerAutor'>
          {logement.host.name}
          <img src="../Assets/Images/logoAutor.png" alt="Autor"/>
        </div>
        {/* <div>
          <img src="../Assets/Images/logoAutor.png" alt="Autor"/>
        </div> */}
        <div className='containerTitle'>
          {logement.title}
        </div>
        <div className='containerLocation'>
          {logement.location}
        </div>
        <div className='containerTag'>
          {renderTag()}
        </div>
        <div className='containerRating'>
          {disPlayRedStar()}
          {disPlayGreyStar()}
        </div>
        <div className='containerCollapseFiche'>
          <div className='collapseCol'>
            <Collapse info={collapseInfo1} />
          </div>
          <div className='collapseCol'>
            <Collapse info={collapseInfo2} />
          </div>
        </div>
      </div>
    )  
  }
    
export default Fiche;

