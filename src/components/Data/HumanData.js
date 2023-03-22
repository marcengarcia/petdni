import './HumanData.css'

const HumanData = (props) => {

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="second" />
            <label for="second">datos del humano</label>
            <div className='content'>
                <table>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Nombre:</td>
                        <td className='value'>{props.humanData?.name}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Telefono:</td>
                        <td className='value'>{props.humanData?.phone}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Instagram:</td>
                        <td className='value'>{props.humanData?.instagram}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Twitter:</td>
                        <td className='value'>{props.humanData?.twitter}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Facebook:</td>
                        <td className='value'>{props.humanData?.Facebook}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Otro:</td>
                        <td className='value'>{props.humanData?.other}</td>
                        <td class="highlight"><div></div></td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default HumanData