import './PetData.css'

const petData = (props) => {

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="first" defaultChecked />
            <label for="first">datos del perruno</label>
            <div className='content'>
                <table>
                    <tr>
                        <td>Nombre:</td>
                        <td className='value'>{props.petData?.name}</td>
                    </tr>
                    <tr>
                        <td>Edad:</td>
                        <td className='value'>{props.petData?.age}</td>
                    </tr>
                    <tr>
                        <td>Raza:</td>
                        <td className='value'>{props.petData?.breed}</td>
                    </tr>
                    <tr>
                        <td>Sexo:</td>
                        <td className='value'>{props.petData?.sex}</td>
                    </tr>
                    <tr>
                        <td>Castrada:</td>
                        <td className='value'>{props.petData?.neutered}</td>
                    </tr>
                    <tr>
                        <td>Vacunas al Dia:</td>
                        <td className='value'>{props.petData?.vaxxed}</td>
                    </tr>
                    <tr>
                        <td>Chippeada:</td>
                        <td className='value'>{props.petData?.chipped}</td>
                    </tr>
                    <tr>
                        <td>Alergias:</td>
                        <td className='value'>{props.petData?.allergies}</td>
                    </tr>
                    <tr>
                        <td>Dieta:</td>
                        <td className='value'>{props.petData?.diet}</td>
                    </tr>
                    <tr>
                        <td>Otro:</td>
                        <td className='value'>{props.petData?.other}</td>
                    </tr>
                </table>
            </div >
        </div >
    )
}

export default petData
