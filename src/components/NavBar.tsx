import { Link } from "react-router-dom";
import OnstagePic from '../img/Onstage.png'
import '../css/NavBar.css'

export const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className="top-container">
                    <img src={OnstagePic} alt="Onstage" className="logo" />
                    <h1 className="title">Onstage</h1>
                </div>
                <div className="links">
                    <Link to='/' className="nav-button">Home</Link>
                    <Link to='/videos' className="nav-button">Showcase</Link>
                </div>
            </div>
        </nav>
    )
}