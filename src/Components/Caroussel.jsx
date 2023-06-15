import { useState } from 'react';
import '../Styles/Caroussel.css'
import arrowPrev from '../Assets/Images/arrowPrev.png'
import arrowNext from '../Assets/Images/arrowNext.png'


function Caroussel (props) {  

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    let isHiddenClass = props.pictures.length <= 1 ? 'hideButton' : "";
    // if ( props.pictures.length <=1 ){
    //     isHiddenClass = 'hideButton';
    // } else {
    //     isHiddenClass = "";
    // }

    const prev = () => {
        console.log ('prev', currentImageIndex)
        if (currentImageIndex === 0) {
            setCurrentImageIndex (props.pictures.length - 1)
        } else {
            setCurrentImageIndex (currentImageIndex - 1)
        }
    };

    const next = () => {
        console.log ('next', currentImageIndex)
        if (currentImageIndex === props.pictures.length - 1) {
            setCurrentImageIndex (0)
        } else {
            setCurrentImageIndex (currentImageIndex + 1)
        }
    };

    return (
        <div className='containerCaroussel'>
            <img src={props.pictures[currentImageIndex]} alt =''></img>
            <input type='image' src={arrowPrev} alt='prev' className={`prev ${isHiddenClass}`} onClick={prev} />
            <input type='image' src={arrowNext} alt='next' className={`next ${isHiddenClass}`} onClick={next} />
        </div>
    )
}

export default Caroussel