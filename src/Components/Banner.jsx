
import '../Styles/Banner.css'

export default function Banner(props) {
    return (
        <div className={props.dataBackground}>
            <h1 className='bannerTexte'>{props.dataTitle}</h1>
        </div>
    )  
 }
