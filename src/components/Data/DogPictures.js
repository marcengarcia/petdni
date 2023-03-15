import './DogPictures.css'
import Slider from './Slider'

const slides = [
    'https://thumbs.dreamstime.com/b/dog-reading-newspaper-cool-funny-jack-russell-magazine-125398832.jpg',
    'https://thumbs.dreamstime.com/b/brown-birman-cat-brown-birman-cat-room-119663828.jpg',
    'https://thumbs.dreamstime.com/b/head-study-siberian-tiger-beautiful-close-up-amur-endangered-species-our-largest-big-cat-apex-predator-115561629.jpg',

]

const DogPictures = () => {
    return (
        <div className='carrousel'>
            <Slider pictures={slides} />
            <div className='dog-name'>Molly</div>
        </div>
    )
}

export default DogPictures