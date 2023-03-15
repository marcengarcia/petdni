import './HumanData.css'



const HumanData = () => {

    let humanData = [
        {
            name: 'Marce',
            phone: '+555 1234567890',
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
                <table className='content-table'>
                    <thead >
                        <tr className='table-header'>
                            <th>Nombre:</th>
                            <th>Telefono:</th>
                            <th>Instagram:</th>
                            <th>Twitter:</th>
                            <th>Facebook:</th>
                            <th>Otro:</th>
                        </tr>
                        <tbody>
                                <tr key={humanData.id}>
                                    <td>{humanData[0].name}</td>
                                    <td>{humanData[0].phone}</td>
                                    <td>{humanData[0].instagram}</td>
                                    <td>{humanData[0].twitter}</td>
                                    <td>{humanData[0].Facebook}</td>
                                    <td>{humanData[0].other}</td>
                                </tr>
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>

    )
}

export default HumanData