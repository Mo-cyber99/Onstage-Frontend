import { Link } from "react-router-dom";
// import { useContext } from "react";
// import OnstagePic from '../img/Onstage.png'
import User from '../img/icons8-male-user-90.png'
import '../css/Header.css'

export const Header = () => {
    return (
        <section className="Header">
            {/* <Link to='/'><img src={OnstagePic} alt='Onstage' className="home-pic" /></Link> */}
            <Link to='sign-in'><img src={User} alt="Profile" className="user-pic" /></Link>
        </section>
    )
}