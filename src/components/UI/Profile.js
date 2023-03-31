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
                    <input type="radio" name="accordion" id="first" defaultChecked />
                    <label for="first">datos del perruno!</label>
                    <div className='content'>
                        <table>
                            <tr>
                                <td>Nombre:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Edad:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Raza:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Sexo:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Castrada:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Vacunas al Dia:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Chippeada:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Otro:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                        </table>
                        <button className="save-data">Guardar</button>
                    </div>

                </div>
                <div className='human-data'>
                    <input type="radio" name="accordion" id="second" />
                    <label for="second">datos del humano</label>
                    <div className='content'>
                        <table>
                            <tr>
                                <td>Nombre:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Telefono:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Instagram:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Twitter:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Facebook:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Alergias:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                            <tr>
                                <td>Otro:</td>
                                <td className='value'><input type="text" /></td>
                            </tr>
                        </table>
                        <button className="save-data">Guardar</button>
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
                            <button className="save-data">Guardar</button>
                        </table>
                    </div>
                </div>
            </div>
            <div className="footer"> <Footer /></div>
        </div>
    )
}

export default Profile;