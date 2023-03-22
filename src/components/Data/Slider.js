import React from "react"
import './Slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {

    const [actualImage, setActualImage] = React.useState(0)
    const imageAmount = pictures?.length

    if (!Array.isArray(pictures) || imageAmount === 0)
        return

    const nextImage = () => {
        setActualImage(actualImage === imageAmount - 1 ? 0 : actualImage + 1)
    }

    const prevImage = () => {
        setActualImage(actualImage === 0 ? imageAmount - 1 : actualImage - 1)
    }


    return (
        <div className="separator">
            < FontAwesomeIcon icon={faCircleArrowLeft} className="arrow-back" onClick={prevImage} />
            <div>
                {pictures.map((slides, index) => {
                    return (
                        <div className="slider" >
                            {actualImage === index && (
                                <img key={index} src={slides} alt="Profile pictures of the doggo" />
                            )}
                        </div>
                    )
                })}
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-forward" onClick={nextImage}/>
                  </div>
    )
}

export default Slider

