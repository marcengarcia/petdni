import './DogPictures.css'
import Slider from './Slider'

const slides = [];

function importAll(r) {
    r.keys().forEach(key => slides.push(r(key)));
}

importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));

const DogPictures = () => {
    return (
        <div className='carrousel'>
            <Slider pictures={slides} className='carrouselFrame'>
                <div>
                    {slides.map((slides, index) => (
                        <img src={slides.default} key={index} alt={`image-${index}`} />
                    ))}
                </div>
            </Slider>
        </div>
    )
}

export default DogPictures
