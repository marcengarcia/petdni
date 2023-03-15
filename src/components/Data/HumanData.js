import './HumanData.css'

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

const HumanData = () => {
    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="second" />
            <label for="second">datos del humano</label>
            <div className='content'>
                <table className='content-table'>
                    <thead >
                        <tr className='table-header'>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Instagram</th>
                            <th>Twitter</th>
                            <th>Facebook</th>
                            <th>Otro</th>
                        </tr>
                        <tbody>
                            {humanData.map(hd => (
                                <tr key={hd.id}>
                                    <td>{hd.name}</td>
                                    <td>{hd.phone}</td>
                                    <td>{hd.instagram}</td>
                                    <td>{hd.twitter}</td>
                                    <td>{hd.Facebook}</td>
                                    <td>{hd.other}</td>
                                </tr>
                            ))}
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>

    )
}

export default HumanData