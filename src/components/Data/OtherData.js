import './OtherData.css'

let otherData = [
    {
        otherInfo: 'Aca iria un text area read only con info que los dueños crean que es importante y no esta en los campos de las tablas',
    },
]


const OtherData = () => {
    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="third" />
            <label for="third">otros datos</label>
            <div className='content'>              
              <table className='content-table'>
                <thead >
                    <tr className='table-header'>
                        <th>Mas informacion util</th>
                    </tr>
                    <tbody>
                        {otherData.map(od => (
                            <tr key={od.id}>
                                <td>{od.otherInfo}</td>
                            </tr>
                        ))}
                    </tbody>
                </thead>
            </table>
            </div>
        </div>
    )
}

export default OtherData