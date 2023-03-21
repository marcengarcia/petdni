import "./Profile.css"
import DogPictures from '../Data/DogPictures';
import DogData from '../Data/DogData';
import HumanData from '../Data/HumanData';
import OtherData from '../Data/OtherData';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import Slider from "../Data/Slider";


const Profile = () => {
    return (
        <div className="card">

            <div className="header"><Header /></div>
            <div className="image-area"> <Slider/>AGREGAR IMAGEN</div>
            <div className='accordion'>
            <input type="radio" name="accordion" id="first" defaultChecked/>
            <label for="first">datos del perruno</label>
            <div className='content'>
                <table>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Nombre:</td>
                        <td className='value'><input type="text" /></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Edad:</td>
                        <td className='value'><input type="text"/></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Raza:</td>
                        <td className='value'><input type="text"/></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Sexo:</td>
                        <td className='value'><input type="text"/></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Castrada:</td>
                        <td className='value'><input type="text"/></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Vacunas al Dia:</td>
                        <td className='value'><input type="text"/></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Chippeada:</td>
                        <td className='value'><input type="text"/></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                    <tr>
                        <td class="highlight"><div></div></td>
                        <td>Otro:</td>
                        <td className='value'><input type="text"/></td>
                        <td class="highlight"><div></div></td>
                    </tr>
                </table>
            </div >
        </div >
            <div className="footer"> <Footer /></div>
        </div>
    )
}

export default Profile;