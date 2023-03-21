import './DogData.css'

const DogData = () => {
    let dogData = [
        {
            name: 'Molly',
            age: '2 años',
            breed: 'Labrador',
            sex: 'Hembra',
            neutered: 'Si',
            vaxxed: 'Si',
            chipped: 'Si',
            other: 'No'
        },
    ]
    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="first" defaultChecked/>
            <label for="first">datos del perruno</label>
            <div className='content'>
                <table>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Nombre:</td>
                        <td className='value'>{dogData[0].name}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Edad:</td>
                        <td className='value'>{dogData[0].age}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Raza:</td>
                        <td className='value'>{dogData[0].breed}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Sexo:</td>
                        <td className='value'>{dogData[0].sex}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Castrada:</td>
                        <td className='value'>{dogData[0].neutered}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Vacunas al Dia:</td>
                        <td className='value'>{dogData[0].vaxxed}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Chippeada:</td>
                        <td className='value'>{dogData[0].chipped}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Otro:</td>
                        <td className='value'>{dogData[0].other}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                </table>
            </div >
        </div >
    )
}

export default DogData