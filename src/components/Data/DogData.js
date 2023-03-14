import './DogData.css'


const DogData = () => {
    return (
        <div className='accordion'>
            <input type="radio" name="accordion" id="first"></input>
            <label for="first">datos del perruno</label>
            <div className='content'>datos del perruno
            texto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto textotexto texto 
            </div>
        </div>
    )
}

export default DogData