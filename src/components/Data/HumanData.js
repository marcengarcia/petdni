import './HumanData.css'

const HumanData = (props) => {

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="second" />
            <label for="second">datos del humano</label>
            <div className='content'>
                <table>
                    <tr>
                        <td>Nombre:</td>
                        <td className='value'>{props.humanData?.name}</td>
                    </tr>
                    <tr>
                        <td>Telefono:</td>
                        <td className='value'>{props.humanData?.phone}</td>
                    </tr>
                    <tr>
                        <td>Instagram:</td>
                        <td className='value'>{props.humanData?.instagram}</td>
                    </tr>
                    <tr>
                        <td>Twitter:</td>
                        <td className='value'>{props.humanData?.twitter}</td>
                    </tr>
                    <tr>
                        <td>Facebook:</td>
                        <td className='value'>{props.humanData?.Facebook}</td>
                    </tr>
                    <tr>
                        <td>Otro:</td>
                        <td className='value'>{props.humanData?.other}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default HumanData