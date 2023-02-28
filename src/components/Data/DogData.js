import './DogData.css'


const DogData = (props) => {
    return (
        <div className='container'>
            <div className="display-picture">
                <img src="../images/molly.jpg" alt='dog profile picture' className='profilePicture'></img>
                <h2 className='dog-name'>{props.name}</h2>
            </div>
            <div className='dog-data'>
                <table className='dogTable'> <h2>Mis Datos</h2>
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