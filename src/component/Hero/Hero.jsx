import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';

import { BsBalloonHeartFill } from 'react-icons/bs';
import { HeroContainer, HeroSeparatorStyled, HeroStyled } from './HeroStyles';
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer id="hero">
      <HeroSeparatorStyled>
        
          <h1>
            I <BsBalloonHeartFill /> BOOKS
          </h1>
        
      </HeroSeparatorStyled>
      <img
        src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732837221/muchos-libros-apilados-con-fondo-borroso-de-librer%C3%ADa-llena-de-libros-foto-con-copyspace_wnbtda.png"
        alt=""
      />
      <HeroStyled>
        <h2> Lee más, vive más </h2>
        <h2>Explora un mundo de historias</h2>
        <p>
          Navega entre nuestras categorías y descubre nuevos mundos a través de
          los libros.
        </p>
        <span>
          ¡si quieres comunicarte con nosotros completa el formulario!
        </span>

        <Button onClick={() => navigate('/Formulario')}>formulario</Button>
      </HeroStyled>
    </HeroContainer>
  );
};
