import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SliderContainer } from './CarrouselStyles';

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <img src="/public/img/Dracula.webp" alt="" />
        </div>
        <div>
          <img src="/public/img/alicia.jpg" alt="" />
        </div>
        <div>
          <img
            src="/public/img/f.elconfidencial.com_original_fc3_cf2_1b6_fc3cf21b6b7c29ae068a3c6121852d12.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="/public/img/e3d17acc42ec-los-dioses-del-norte-la-leyenda-del-bosque-de-jara-santamar-a-montena-.webp"
            alt=""
          />
        </div>
        <div>
          <img src="/public/img/images.jpeg" alt="" />
        </div>
        <div>
          <img src="/public/img/9789504944171.webp" alt="" />
        </div>
      </Slider>
    </SliderContainer>
  );
}

export default AutoPlay;
