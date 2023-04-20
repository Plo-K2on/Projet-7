
import '../Styles/Fiche.css'
import '../Components/Collapse.jsx'
import { useParams } from "react-router-dom"
import Collapse from '../Components/Collapse.jsx';
import Logements from '../Mock/logements.json';

function Fiche() {
  // récupérer le paramètre id
  const { id } = useParams(); // on utilise la destructuration JS pour récupérer juste l'id
  const logement = Logements.find((logement) => logement.id === id)

  const collapseInfo1 = {
    header: "Description",
    content: logement.description
  }
  const collapseInfo2 = {
    header: "Equipments",
    content: logement.equipments
  }

    return (
      <div className='containerCollapse'>
        <div className='collapseCol'>
          <Collapse info={collapseInfo1} />
        </div>
        <div className='collapseCol'>
          <Collapse info={collapseInfo2} />
        </div>
      </div>
    )  
  }
    
export default Fiche;

