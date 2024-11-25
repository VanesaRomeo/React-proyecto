import styled from 'styled-components';

export const ProductoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    width: 800px;
    font-size: 20px;
  }

  @media (max-width: 840px) {
    h1 {
      font-size: 30px;
      width: 300px;
    }
    p {
      width: 700px;
      font-size: 18px;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 25px;
      width: 280px;
    }
    p {
      width: 90%;
      font-size: 16px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 22px;
      width: 220px;
    }
    p {
      width: 100%;
      font-size: 14px;
    }
  }
`;

export const ProducCategory = styled.div`
  display: flex;
`;

export const CategoriasSections = styled.section`
  margin-top: 4rem;

  h2 {
    color: rgba(13, 93, 92, 1);

    @media (max-width: 560px) {
      font-size: 20px;
    }
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px 30px;
  text-align: center;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    padding: 10px;
  }
`;

export const ProductCard = styled.div`
  background-color: blanchedalmond;
  padding: 20px;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 250px;

  img {
    width: 90%;
    height: 350px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    color: rgba(13, 93, 92, 1);
  }

  p {
    color: #6c757d;
    margin: 0.5rem 0;
    color: rgba(13, 93, 92, 1);
  }

  @media (max-width: 1300px) {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 170px;
      height: 230px;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 968px) {
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 140px;
      height: 190px;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 140px;
      height: 190px;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 560px) {
    max-width: 170px;
    padding: 15px; /* Ajuste del padding para pantallas pequeñas */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: 150px;
    }

    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
