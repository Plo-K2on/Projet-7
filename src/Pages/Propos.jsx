import Banner from '../Components/Banner.jsx'
import Collapse from '../Components/Collapse.jsx';
import '../Styles/Propos.css'



function Propos() {

  const collapseInfo1 = {
    header: "Fiabilité",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  }
  const collapseInfo2 ={
    header: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  }

  const collapseInfo3 ={
    header: "Service",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  }

  const collapseInfo4 ={
    header: "Sécurité",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  }
  
    return (
      <div className='containerPropos'>
          <Banner dataBackground='bannerApropos' dataTitle ="" />
          <div className='containerCollapsePropos'>
            <Collapse info={collapseInfo1}/>
            <Collapse info={collapseInfo2}/>
            <Collapse info={collapseInfo3}/>
            <Collapse info={collapseInfo4}/>
          </div>
      </div>
    )  
  }

  export default Propos;