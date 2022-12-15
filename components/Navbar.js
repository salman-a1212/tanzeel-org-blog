import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Image from 'next/image'
import logo from '../images/tanzeel-logo-final-cut-mm.png'

const Navbar = () => {
    return (
        <div className='container-fluid m-0'>
            <div className="img-container">
                <Image src={logo} alt="" width={225} />
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link1" href="#">How It Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link1" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <button><a className="nav-link">LOGIN</a></button>
                    </li>
                    <li className="nav-item">
                        <button className='second'><a className="nav-link">TRY FOR FREE</a></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar