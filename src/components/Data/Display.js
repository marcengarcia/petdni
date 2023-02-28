import DogData from './DogData'
import './Display.css'
import Header from './Header.js'
import Footer from './Footer'

const Display = (props) => {
    return (
        <div>
            <Header />
            <div >
                <DogData
                    name={props.items[0].name}
                    age={props.items[0].age}
                    breed={props.items[0].breed}
                    sex={props.items[0].sex}
                    neutered={props.items[0].neutered}
                    vaxxed={props.items[0].vaxxed}
                    chipped={props.items[0].chipped}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Display