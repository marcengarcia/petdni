import './DogData.css'
// import Card from '../UI/Card'


const DogData = (props) => {
    return (
        <div>
            <div className='container'>
                <h2 className='table-title'>Mis Datos</h2>
                <table>
                    <tr>
                        <td className='key'>Edad:</td>
                        <td className='value'>{props.age}</td>
                    </tr>
                    <tr>
                        <td className='key'>Raza:</td>
                        <td className='value'>{props.breed}</td>
                    </tr>
                    <tr>
                        <td className='key'>Sexo:</td>
                        <td className='value'>{props.sex}</td>
                    </tr>
                    <tr>
                        <td className='key'>Castrada:</td>
                        <td className='value'>{props.neutered}</td>
                    </tr>
                    <tr>
                        <td className='key'>Vacunas al dia:</td>
                        <td className='value'>{props.vaxxed}</td>
                    </tr>
                    <tr>
                        <td className='key'>Chippeada:</td>
                        <td className='value'>{props.chipped}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default DogData