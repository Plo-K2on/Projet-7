import Banner from '../Components/Banner';
import Cards from '../Components/Cards';
import '../Styles/Home.css';

function Home() {
    return (
      <div>
        <Banner />
        <div className='containerCards'>
          <Cards />
        </div>
      </div>
    )  
  }

  export default Home;
  