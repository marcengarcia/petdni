import React from "react"
import './Slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {

    const [actualImage, setActualImage] = React.useState(0)
    const imageAmount = pictures?.length

    if (!Array.isArray(pictures) || imageAmount == 0)
        return

        //Este boton no funciona
    const nextImage = () => {
        setActualImage(actualImage === imageAmount -1 ? 0 : actualImage + 1)
    }

    const prevImage = () => {
        setActualImage(actualImage ===! imageAmount - 1 ? 0 : actualImage - 1)
    }


    return (
        <div>
            < FontAwesomeIcon icon={faCircleArrowLeft} className="arrow-back" onClick={prevImage} />
            <div>
                {pictures.map((slides, index) => {
                    return (
                        <div>
                            {actualImage === index && (
                                <img key={index} src={slides} alt="Profile pictures of the doggo" />
                            )}
                        </div>
                    )
                })}
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-forward" onClick={nextImage
            } />
        </div>
    )
}

export default Slider

