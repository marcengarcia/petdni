import './Header.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faIdCard, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [activeIcon, setActiveIcon] = useState();

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };
    return (
        <nav>
            <div className='navigation' >
                <ul>
                    <li onClick={() => handleIconClick('faPaw')} className={activeIcon === 'faPaw' ? 'active' : ''} >
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faPaw} />
                            </span>
                            <span className='text'>Mascotas</span>
                        </a>
                    </li>
                    <li onClick={() => handleIconClick('faIdCard')} className={activeIcon === 'faIdCard' ? 'active' : ''}>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faIdCard} />
                            </span>
                            <span className='text'>Perfil</span>
                        </a>
                    </li>
                    <li onClick={() => handleIconClick('faRightFromBracket')} className={activeIcon === 'faRightFromBracket' ? 'active' : ''}>
                        <a href="#">
                            <span className='icon'>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </span>
                            <span className='text'>Salir</span>
                        </a>
                    </li>
                    <div className='indicator'></div>
                </ul>
            </div>
        </nav>
    )
}

export default Header