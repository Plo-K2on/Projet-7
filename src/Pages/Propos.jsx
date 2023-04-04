import Banner from '../Components/Banner.jsx'
import Collapse from '../Components/Collapse.jsx';
import '../Styles/Propos.css'

function Propos() {
    return (
      <div>
          <Banner />
          <div className='containerCollapse'>
            <Collapse />
          </div>
      </div>
    )  
  }

  export default Propos;