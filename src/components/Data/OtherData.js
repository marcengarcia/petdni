import './OtherData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const OtherData = () => {
    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="third"></input>
            <label for="third">otros datos</label>
            <div className='content'>other data
            texto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto texto 
            </div>
        </div>
    )
}

export default OtherData