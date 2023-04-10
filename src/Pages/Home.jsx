import Banner from '../Components/Banner';
import Card from '../Components/Card';
import logements from '../Mock/logements.json'
import '../Styles/Home.css';

const allCards = logements.map((logement)=>{
  return (
    <Card 
    key={logement.id}
    id={logement.id}
    title={logement.title} 
    cover={logement.cover} 
    pictures={logement.pictures}
    description={logement.description}
    host={logement.host}
    rating={logement.rating}
    location={logement.location}
    equipments={logement.equipments}
    tags={logement.tags} />
  )
})

function Home() {
    return (
      <div>
        <Banner />
        <div className='containerCards'>
        {allCards}
        </div>
      </div>
    )  
  }

  export default Home;
  