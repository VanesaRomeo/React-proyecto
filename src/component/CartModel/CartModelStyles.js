import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const CartModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 450px;
  height: calc(100vh - 4rem);
  border: 2px solid black;
  padding: 2rem;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);

  overflow-y: auto;
  padding-right: 10px;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: rgba(13, 93, 92, 1) #f8f9fa;
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// cart card

export const ProductCardWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: blanchedalmond;
  transition: transform 0.3s ease;
  gap: 15px;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 30%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const ProductInfoWrapper = styled.div`
  text-align: center;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;

  color: #333;
`;

export const QuantityControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;
`;

export const AdjustButton = styled.button`
  background-color: burlywood;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150; /* Menor que el modal */
  width: 100vw;
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const QuantityDisplay = styled.span`
  font-size: 1rem;
  font-weight: bold;
  padding: 0 10px;
  color: #333;
`;

export const PrecioContainer = styled.div`
  color: black;
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: blanchedalmond;
  gap: 10px;
  padding: 10px;
`;

export const ButtonStylesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PrecioFormat = styled.div``;
