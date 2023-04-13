import "./PetPicker.css"



const PetPicker = (props) => {



    return (
        <div className="picker">
            <button className="pet">{props.pets[0]?.name}</button>
            <button className="pet">{props.pets[1]?.name}</button>
            <button className="pet">aca la pet 3</button>
            <button className="pet">aca la pet 4</button>
        </div>
    )
}

export default PetPicker;