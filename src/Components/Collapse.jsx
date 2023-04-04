
import '../Styles/Collapse.css'
import { useState } from 'react';

export default function Collapse() {
    const [selected, setSelected] = useState(false);

    const toggle = () => {
        return setSelected(!selected)
    }
    
    let isHiddenClass = selected ? "CollapseHidden" : "";

    // let isHiddenClass;
    // if(selected === true) {
    //     isHiddenClass = "CollapseHidden"
    // } else {
    //     isHiddenClass = "";
    // }

    return (
        <div className="CollapseContainer">
            <div className="CollapseHeader">
                <h1>Fiabilité</h1>
                <img src={require('../Assets/Images/FlecheCollapse.png')} alt="Fleche" onClick={() => toggle()}/>
            </div>
            <div className={`CollapseContent ${isHiddenClass}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas quidem ab aut. Molestiae rerum eum, explicabo adipisci, cumque exercitationem nemo voluptatibus cum ab ipsam dolorum. Distinctio illum inventore dolore.
            </div>

            <div className="CollapseHeader">
                <h1>Respect</h1>
                <img src={require('../Assets/Images/FlecheCollapse.png')} alt="Fleche" onClick={() => toggle()}/>
            </div>
            <div className={`CollapseContent ${isHiddenClass}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas quidem ab aut. Molestiae rerum eum, explicabo adipisci, cumque exercitationem nemo voluptatibus cum ab ipsam dolorum. Distinctio illum inventore dolore.
            </div>

            <div className="CollapseHeader">
                <h1>Service</h1>
                <img src={require('../Assets/Images/FlecheCollapse.png')} alt="Fleche" onClick={() => toggle()}/>
            </div>
            <div className={`CollapseContent ${isHiddenClass}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas quidem ab aut. Molestiae rerum eum, explicabo adipisci, cumque exercitationem nemo voluptatibus cum ab ipsam dolorum. Distinctio illum inventore dolore.
            </div>

            <div className="CollapseHeader">
                <h1>Responsabilitée</h1>
                <img src={require('../Assets/Images/FlecheCollapse.png')} alt="Fleche" onClick={() => toggle()}/>
            </div>
            <div className={`CollapseContent ${isHiddenClass}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas quidem ab aut. Molestiae rerum eum, explicabo adipisci, cumque exercitationem nemo voluptatibus cum ab ipsam dolorum. Distinctio illum inventore dolore.
            </div>
        </div>
    )
}

