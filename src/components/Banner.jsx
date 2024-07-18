import { useEffect, useState } from 'react';
import { MdArrowCircleRight } from "react-icons/md";
import '../styles/Banner.css';

const Banner = () => {

    const [bannerContentVisible, setBannerContentVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setBannerContentVisible(true);
        }, 0)
    }, [])

    return (
        <div id="banner">
            <div id="background-image" className={bannerContentVisible ? 'visible' : ''}></div>
            <div id="content" className={bannerContentVisible ? 'visible' : ''}>
                <h1>Flow State Žirgynas</h1>
                <a href='#services' className='d-flex align-items-center'>
                    <h3>Sužinokite daugiau</h3>
                    <MdArrowCircleRight size={25} style={{ marginLeft: '.5rem'}} />
                </a>
            </div>
        </div>
    )
}

export default Banner;