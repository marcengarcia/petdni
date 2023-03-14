import './DogData.css'


const DogData = () => {
    return (
        <div className='accordion'>
            {/* TODO:
            necesito poder tener el primer item seleccionado, si agrego un checked al estado necesito 2 clicks para expandir las secciones.
            
            */}
            <input type="radio" name="accordion" id="first"/>
            <label for="first">datos del perruno</label>
            <div className='content'>datos del perruno
            texto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto texto 
            </div>
        </div>
    )
}

export default DogData