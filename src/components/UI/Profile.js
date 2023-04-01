import "./Profile.css"
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import Slider from "../Data/Slider";


const Profile = (props) => {
    return (
        <>
            <div className="card">
                <div className="header"><Header /></div>
                <div className="carrousel"> <Slider /><p>AGREGAR IMAGEN</p></div>
                <div className='accordion'>
                    <div className="dog-data">
                        <input type="radio" name="accordion" id="first" defaultChecked />
                        <label htmlFor="first">datos del perruno!</label>
                        <div className='content'>
                            <table>
                                <tr>
                                    <td>Nombre:</td>
                                    <input type="text" defaultValue={props.dogData?.name} />
                                </tr>
                                <tr>
                                    <td>Edad:</td>
                                    <input type="text" defaultValue={props.dogData?.age} />
                                </tr>
                                <tr>
                                    <td>Raza:</td>
                                    <input type="text" defaultValue={props.dogData?.breed} />
                                </tr>
                                <tr>
                                    <td>Sexo:</td>
                                    <input type="text" defaultValue={props.dogData?.sex} />
                                </tr>
                                <tr>
                                    <td>Castrada:</td>
                                    <input type="text" defaultValue={props.dogData?.neutered} />
                                </tr>
                                <tr>
                                    <td>Vacunas al Dia:</td>
                                    <input type="text" defaultValue={props.dogData?.vaxxed} />
                                </tr>
                                <tr>
                                    <td>Chippeada:</td>
                                    <input type="text" defaultValue={props.dogData?.chipped} />
                                </tr>
                                <tr>
                                    <td>Alergias:</td>
                                    <input type="text" defaultValue={props.dogData?.allergies} />
                                </tr>
                                <tr>
                                    <td>Otro:</td>
                                    <input type="text" defaultValue={props.dogData?.other} />
                                </tr>
                            </table>
                            <button className="save-data">Guardar</button>
                        </div>
                    </div>
                    <div className='human-data'>
                        <input type="radio" name="accordion" id="second" />
                        <label htmlFor="second">datos del humano</label>
                        <div className='content'>
                            <table>
                                <tr>
                                    <td>Nombre:</td>
                                    <input type="text" defaultValue={props.humanData?.name} />
                                </tr>
                                <tr>
                                    <td>Telefono:</td>
                                    <input type="text" defaultValue={props.humanData?.phone} />
                                </tr>
                                <tr>
                                    <td>Instagram:</td>
                                    <input type="text" defaultValue={props.humanData?.instagram} />
                                </tr>
                                <tr>
                                    <td>Twitter:</td>
                                    <input type="text" defaultValue={props.humanData?.twitter} />
                                </tr>
                                <tr>
                                    <td>Facebook:</td>
                                    <input type="text" defaultValue={props.humanData?.facebook} />
                                </tr>
                                <tr>
                                    <td>Otro:</td>
                                    <input type="text" defaultValue={props.humanData?.other} />
                                </tr>
                            </table>
                            <button className="save-data">Guardar</button>
                        </div>
                    </div>
                    <div className='other-data'>
                        <input type="radio" name="accordion" id="third" />
                        <label htmlFor="third">otros datos</label>
                        <div className='content'>
                            <table className='content-table'>
                                <thead >
                                    <tr className='table-header'>
                                        <th>Mas informacion util:</th>
                                    </tr>
                                    <tbody>
                                        <tr>
                                            <td className='value'>
                                                <textarea cols="30" rows="7">{props.otherData?.otherInfo}</textarea>
                                            </td>
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
        </>
    )
}

export default Profile;