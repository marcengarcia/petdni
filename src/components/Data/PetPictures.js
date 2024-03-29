import './PetPictures.css'
import Slider from './Slider'

const slides = [];

function importAll(r) {
    r.keys().forEach(key => slides.push(r(key)));
}

importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));

const DogPictures = (props) => {
    return (
        <div className='carrousel'>
            <Slider pictures={slides}>
                <div>
                    {slides.map((slides, index) => (
                        <img src={slides.default} key={index} alt={`image-${index}`} />
                    ))}
                </div>
            </Slider>
            <div className="dog-name">{props.dogData?.name}</div>
        </div>
    )
}

export default DogPictures
