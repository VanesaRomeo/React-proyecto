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
          <img src="/src/assets/img/Dracula.webp" alt="" />
        </div>
        <div>
          <img src="/src/assets/img/alicia.jpg" alt="" />
        </div>
        <div>
          <img
            src="/src/assets/img/Crimen y Castigo.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="/src/assets/img/Don Quijote de la Mancha.jpeg"
            alt=""
          />
        </div>
        <div>
          <img src="/src/assets/img/El Amor en los Tiempos del Cólera.jpg" alt="" />
        </div>
        <div>
          <img src="/src/assets/img/El Guardián entre el Centeno.webp" alt="" />
        </div>
      </Slider>
    </SliderContainer>
  );
}

export default AutoPlay;
