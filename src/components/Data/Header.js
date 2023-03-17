import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faAddressCard, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav>
            <div className='navigation'>
                <ul>
                    <li className='list'>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faHouseChimney} />
                            </span>
                            <span className='text'>Inicio</span>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faAddressCard} />
                            </span>
                            <span className='text'>Perfil</span>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faMessage} />
                            </span>
                            <span className='text'>Messages</span>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </span>
                            <span className='text'>Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header