import './OtherData.css'

const OtherData = (props) => {

    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="third" />
            <label for="third">otros datos</label>
            <div className='content'>
                <table className='content-table'>
                    <tr className='table-header'>
                        <th>Mas informacion util:</th>
                    </tr>
                    <tr>
                        <td className='value'>{props.otherData?.otherInfo}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default OtherData