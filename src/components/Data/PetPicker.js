import React from "react";
import "./PetPicker.css";

const PetPicker = (props) => {
    return (
        <div className="picker">
            {props.pets.map((pet, index) => (
                <button className="pet" key={index}>
                    {pet.name}
                </button>
            ))}
        </div>
    );
};

export default PetPicker;
