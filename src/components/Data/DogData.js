import './DogData.css'

const DogData = (props) => {

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="first" defaultChecked />
            <label for="first">datos del perruno</label>
            <div className='content'>
                <table>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Nombre:</td>
                        <td className='value'>{props.dogData?.name}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Edad:</td>
                        <td className='value'>{props.dogData?.age}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Raza:</td>
                        <td className='value'>{props.dogData?.breed}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Sexo:</td>
                        <td className='value'>{props.dogData?.sex}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Castrada:</td>
                        <td className='value'>{props.dogData?.neutered}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Vacunas al Dia:</td>
                        <td className='value'>{props.dogData?.vaxxed}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Chippeada:</td>
                        <td className='value'>{props.dogData?.chipped}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Alergias:</td>
                        <td className='value'>{props.dogData?.allergies}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Otro:</td>
                        <td className='value'>{props.dogData?.other}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                </table>
            </div >
        </div >
    )
}

export default DogData
