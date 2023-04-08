
import '../Styles/Collapse.css'
import { useState } from 'react';



export default function Collapse() {
    const [selected, setSelected] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);

    const toggle = () => {
        return setSelected(!selected)
    }
    const toggle2 = () => {
        return setSelected2(!selected2)
    }
    const toggle3 = () => {
        return setSelected3(!selected3)
    }
    const toggle4 = () => {
        return setSelected4(!selected4)
    }
    
    let isHiddenClass = selected ? "CollapseHidden" : "";
    let isHiddenClass2 = selected2 ? "CollapseHidden" : "";
    let isHiddenClass3 = selected3 ? "CollapseHidden" : "";
    let isHiddenClass4 = selected4 ? "CollapseHidden" : "";

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
                <img src={require('../Assets/Images/FlecheCollapse.png')} alt="Fleche" onClick={() => toggle2()}/>
            </div>
            <div className={`CollapseContent ${isHiddenClass2}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas quidem ab aut. Molestiae rerum eum, explicabo adipisci, cumque exercitationem nemo voluptatibus cum ab ipsam dolorum. Distinctio illum inventore dolore.
            </div>

            <div className="CollapseHeader">
                <h1>Service</h1>
                <img src={require('../Assets/Images/FlecheCollapse.png')} alt="Fleche" onClick={() => toggle3()}/>
            </div>
            <div className={`CollapseContent ${isHiddenClass3}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas quidem ab aut. Molestiae rerum eum, explicabo adipisci, cumque exercitationem nemo voluptatibus cum ab ipsam dolorum. Distinctio illum inventore dolore.
            </div>

            <div className="CollapseHeader">
                <h1>Responsabilitée</h1>
                <img src={require('../Assets/Images/FlecheCollapse.png')} alt="Fleche" onClick={() => toggle4()}/>
            </div>
            <div className={`CollapseContent ${isHiddenClass4}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quas quidem ab aut. Molestiae rerum eum, explicabo adipisci, cumque exercitationem nemo voluptatibus cum ab ipsam dolorum. Distinctio illum inventore dolore.
            </div>
        </div>
    )
}

