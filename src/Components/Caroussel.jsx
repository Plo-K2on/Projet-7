import { useState } from 'react';
import '../Styles/Caroussel.css'

function Caroussel (props) {  

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prev = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex (props.pictures.length - 1)
        } else {
            setCurrentImageIndex (currentImageIndex - 1)
        }
    };

    const next = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex (props.pictures +0)
        } else {
            setCurrentImageIndex (currentImageIndex + 1)
        }
    };

    return (
        <div>
            <img src={props.pictures[currentImageIndex]} alt =''></img>
            <button onClick={prev}>Precedent</button>
            <button onClick={next}>Suivant</button>
        </div>
    )
}

export default Caroussel