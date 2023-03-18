import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav>
            <div className='navigation'>
                <ul>
                    <li className='list active'>
                        <a href="#">
                            <span className='icon'>
                            <FontAwesomeIcon icon={faPaw} />
                            </span>
                            <span className='text'>Perfil</span>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faMessage} />
                            </span>
                            <span className='text'>Mensajes</span>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </span>
                            <span className='text'>Salir</span>
                        </a>
                    </li>
                    <div className='indicator'>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Header