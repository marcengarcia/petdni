import './Pictures.css'
import DogData, {name} from './DogData'

const Pictures = (props) => {
    const name = DogData.name;
    return (
        <div className="display-picture">
            <img src="../images/molly.jpg" alt='dog profile picture' className='profilePicture'></img>
            <h2 className='dog-name'>{props.name}</h2>
        </div>
    )
}

export default Pictures