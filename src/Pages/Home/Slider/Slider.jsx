import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/slider/slider-s1.jpg';
import img2 from '../../../assets/slider/slider-s2.jpg';
import img3 from '../../../assets/slider/slider-s3.jpg';
import img4 from '../../../assets/slider/slider-1.jpg';
import img5 from '../../../assets/slider/slider-2.jpg';
import img6 from '../../../assets/slider/slider-3.jpg';

const Slider = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
    );
};

export default Slider;