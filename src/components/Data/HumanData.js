import './HumanData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const HumanData = () => {
    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="second"/>
            <label for="second">datos del humano</label>
            <div className='content'>datos del humano
            texto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto texto 
            </div>
        </div>
    )
}

export default HumanData