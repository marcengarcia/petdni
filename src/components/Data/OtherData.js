import './OtherData.css'

const OtherData = (props) => {

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="third" />
            <label for="third">otros datos</label>
            <div className='content'>
                <table>
                    <tr>
                        <td>Mas informacion util:</td>
                    </tr>
                    <tr>
                        <textarea>{props.otherData?.otherInfo}</textarea>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default OtherData