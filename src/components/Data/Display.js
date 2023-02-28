import DogData from './DogData'
import './Display.css'
import Card from '../UI/Card'

const Display = (props) => {
    return (
        <Card >
            <DogData
                name={props.items[0].name}
                age={props.items[0].age}
                breed={props.items[0].breed}
                sex={props.items[0].sex}
                neutered={props.items[0].neutered}
                vaxxed={props.items[0].vaxxed}
                chipped={props.items[0].chipped}
            />
        </Card>
    )
}

export default Display