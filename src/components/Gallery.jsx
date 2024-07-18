import '../styles/Gallery.css';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {
    return (
        <div id="gallery" className="service d-flex flex-row justify-content-around align-items-center">
            <h2>Galerija</h2>
            <Carousel slide pause='hover' wrap>
                <Carousel.Item>
                    <img src={require('../media/stable-front.jpg')} alt='front of stable' aria-label='front of stable' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/horses-laying.jpg')} alt='horses laying outside' aria-label='horses laying outside' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/back.jpg')} alt='back of stable' aria-label='back of stable' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/aras.jpg')} alt='horse named aras' aria-label='horse named aras' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/horse-laying.jpg')} alt='horse laying outside' aria-label='horse laying outside' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/ciko.jpg')} alt='horse named chico' aria-label='horse named chico' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/riding-hall.jpg')} alt='riding hall' aria-label='riding-hall' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/saddles.jpg')} alt='saddle storage area' aria-label='saddle storage area' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/stable.jpg')} alt='inside of stable' aria-label='inside of stable' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/stable-front-horse.jpg')} alt='front of stable with horse outside' aria-label='front of stable with horse outside' className='carousel-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../media/stable-horse.jpg')} alt='horse inside of stable' aria-label='horse inside of stable' className='carousel-image' />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Gallery;