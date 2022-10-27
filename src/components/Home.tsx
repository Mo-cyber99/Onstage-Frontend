import React from "react";
import Loading1 from '../img/Loading1.png'
import Loading2 from '../img/Loading2.png'
import Loading3 from '../img/Loading3.png'
import '../css/Home.css'

export const Home = () => {
    return (
        <div className="container">
            <h1 className="Onstage-title">Welcome All💥</h1>
        <img src={Loading1} alt='Coming Soon' className="Imgcontainer" 
        /><img src={Loading2} alt='Coming Soon' className="Imgcontainer" 
        /><img src={Loading3} alt='Coming Soon' className="Imgcontainer" />
            <p>Welcome to the Onstage homepage, this is a place where the buzzing fandom can come and pay their respects to a top tier society at MMU.</p>
        </div>
    )
}