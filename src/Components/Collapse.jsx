
import '../Styles/Collapse.css'
// import flecheHaut from '../Assets/Images/FlecheCollapse.png'
// import flechebas from '../Assets/Images/arrowBottom.png'
import { useState } from 'react';

function Collapse(props) {
    const [selected, setSelected] = useState(true);
    const [selectedArrow, setSelectedArrow] = useState(true);
    const toggle = () => {
        setSelectedArrow(!selectedArrow)
        // console.log('selectedArrow', selectedArrow)
        return setSelected(!selected)
    }
    
    let isHiddenClass = selected ? "CollapseHidden" : "";
    let displayArrow = selectedArrow ? "maClasseQuiAfficheLaFlecheHaut" : "maClasseQuiAfficheLaFlecheBas";
    const renderContent = () =>{
        if(typeof props.info.content === 'string'){
            return props.info.content
        }
        return props.info.content.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            );
        });
    }

    return (
        <div className="Collapse">
            <div className="CollapseHeader">
                <h1>{props.info.header}</h1>
                <div onClick={() => toggle()}><div className={displayArrow}></div></div>
            </div>
            
            <div className={`CollapseContent ${isHiddenClass}`}>
                <ul>{renderContent()}</ul>
            </div>
        </div>
    )
}

export default Collapse;



