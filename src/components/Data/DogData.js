import './DogData.css'

let dogData = [
    {
        name: 'Molly',
        age: '2 años',
        breed: 'Labrador',
        sex: 'Hembra',
        neutered: 'Si',
        vaxxed: 'Si',
        chipped: 'Si',
        other: ''
    },
]

const DogData = () => {
    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="first" />
            <label for="first">datos del perruno</label>
            <div className='content' >
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Raza</th>
                            <th>Sexo</th>
                            <th>Castrada</th>
                            <th>Vacunas al Dia</th>
                            <th>Chippeada</th>
                            <th>Otro</th>
                        </tr>
                        <tbody>
                            {dogData.map(dd => (
                                <tr key={dd.id}>
                                    <td>{dd.name}</td>
                                    <td>{dd.age}</td>
                                    <td>{dd.breed}</td>
                                    <td>{dd.sex}</td>
                                    <td>{dd.neutered}</td>
                                    <td>{dd.vaxxed}</td>
                                    <td>{dd.chipped}</td>
                                    <td>{dd.other}</td>
                                </tr>
                            ))}
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default DogData