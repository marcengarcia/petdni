import './DogData.css'

const DogData = (props) => {

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="first" defaultChecked />
            <label for="first">datos del perruno</label>
            <div className='content'>
                <table>
                    <tr>
                        <td>Nombre:</td>
                        <td className='value'>{props.dogData?.name}</td>
                    </tr>
                    <tr>
                        <td>Edad:</td>
                        <td className='value'>{props.dogData?.age}</td>
                    </tr>
                    <tr>
                        <td>Raza:</td>
                        <td className='value'>{props.dogData?.breed}</td>
                    </tr>
                    <tr>
                        <td>Sexo:</td>
                        <td className='value'>{props.dogData?.sex}</td>
                    </tr>
                    <tr>
                        <td>Castrada:</td>
                        <td className='value'>{props.dogData?.neutered}</td>
                    </tr>
                    <tr>
                        <td>Vacunas al Dia:</td>
                        <td className='value'>{props.dogData?.vaxxed}</td>
                    </tr>
                    <tr>
                        <td>Chippeada:</td>
                        <td className='value'>{props.dogData?.chipped}</td>
                    </tr>
                    <tr>
                        <td>Alergias:</td>
                        <td className='value'>{props.dogData?.allergies}</td>
                    </tr>
                    <tr>
                        <td>Otro:</td>
                        <td className='value'>{props.dogData?.other}</td>
                    </tr>
                </table>
            </div >
        </div >
    )
}

export default DogData
