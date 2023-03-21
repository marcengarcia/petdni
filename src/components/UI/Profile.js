import "./Profile.css"
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import Slider from "../Data/Slider";


const Profile = () => {
    return (
        <div className="card">

            <div className="header"><Header /></div>
            <div className="carrousel"> <Slider />AGREGAR IMAGEN</div>
            <div className='accordion'>
                <div className="dog-data">
                    <input type="radio" name="accordion" id="first" defaultChecked/>
<div>                    <label for="first">datos del perruno</label>
                    <button className="save-data">Guardar</button></div>
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
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Raza:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Sexo:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Castrada:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Vacunas al Dia:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Chippeada:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Otro:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                        </table>
                    </div >


                </div>
                <div className='human-data'>
                    <input type="radio" name="accordion" id="second" />
                    <label for="second">datos del humano</label>
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
                                <td>Telefono:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Instagram:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Twitter:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Facebook:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                            <tr>
                                <td class="highlight"><div></div></td>
                                <td>Otro:</td>
                                <td className='value'><input type="text" /></td>
                                <td class="highlight"><div></div></td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className='other-data'>
                    <input type="radio" name="accordion" id="third" />
                    <label for="third">otros datos</label>
                    <div className='content'>
                        <table className='content-table'>
                            <thead >
                                <tr className='table-header'>
                                    <th>Mas informacion util:</th>
                                </tr>
                                <tbody>
                                    <tr>
                                        <td className='value'><textarea cols="30" rows="10"></textarea></td>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                    </div>
                </div>
            </div >
            <div className="footer"> <Footer />
            </div>
            </div>
            )
}

            export default Profile;