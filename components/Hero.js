import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import tanzeel_hero_1 from '../images/tanzeel-hero-1.jpeg'
import tanzeel_hero_2 from '../images/tanzeel-hero-2.jpeg'
import tanzeel_hero_3 from '../images/tanzeel-hero-3.jpeg'
import tanzeel_hero_4 from '../images/tanzeel-hero-4.jpeg'
import tanzeel_hero_5 from '../images/tanzeel-hero-5.jpeg'

const Hero = () => {
    return (
        <div className='container-fluid m-0'><div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src={tanzeel_hero_1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <Image src={tanzeel_hero_2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <Image src={tanzeel_hero_3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <Image src={tanzeel_hero_4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <Image src={tanzeel_hero_5} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div></div>
    )
}

export default Hero