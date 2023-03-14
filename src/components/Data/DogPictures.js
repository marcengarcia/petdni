import './DogPictures.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const DogPictures = () => {
    return (
        <div className='carrousel'>
            <img src='../images/IMG-20201015-WA0043.jpg' className='profile-pictures' alt='Profile pictures for the dog' />
            <div className='dog-name'>Molly</div>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow-back" />
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-forward" />
        </div>
    )
}

export default DogPictures