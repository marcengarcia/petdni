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
            <input type="radio" name="accordion" id="first" />
            <label for="first">datos del perruno</label>
            <div className='content' >
                <table className='content-table'>
                    <thead >
                        <tr className='table-header'>
                            <th>Nombre:</th>
                            <th>Edad:</th>
                            <th>Raza:</th>
                            <th>Sexo:</th>
                            <th>Castrada:</th>
                            <th>Vacunas al Dia:</th>
                            <th>Chippeada:</th>
                            <th>Otro:</th>
                        </tr>
                        <tbody>
                            <tr key={dogData.id}>
                                <td>{dogData[0].name}</td>
                                <td>{dogData[0].age}</td>
                                <td>{dogData[0].breed}</td>
                                <td>{dogData[0].sex}</td>
                                <td>{dogData[0].neutered}</td>
                                <td>{dogData[0].vaxxed}</td>
                                <td>{dogData[0].chipped}</td>
                                <td>{dogData[0].other}</td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default DogData