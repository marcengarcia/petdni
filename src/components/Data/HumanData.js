import './HumanData.css'



const HumanData = () => {

    let humanData = [
        {
            name: 'Marce',
            phone: '+54 291 511 1033',
            instagram: '@marcengarcia',
            twitter: '@marcengarcia',
            Facebook: '@marcengarcia',
            other: ''
        },
    ]

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="second" />
            <label for="second">datos del humano</label>
            <div className='content'>
                <table>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Nombre:</td>
                        <td className='value'>{humanData[0].name}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Telefono:</td>
                        <td className='value'>{humanData[0].phone}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Instagram:</td>
                        <td className='value'>{humanData[0].instagram}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Twitter:</td>
                        <td className='value'>{humanData[0].twitter}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Facebook:</td>
                        <td className='value'>{humanData[0].Facebook}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Otro:</td>
                        <td className='value'>{humanData[0].other}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default HumanData