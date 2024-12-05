
import styled from 'styled-components';
import { Field } from 'formik';

export const FormContainer = styled.div`
  margin-top: 10%;
  max-width: 400px;

  padding: 20px;
  background-color: bisque;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    text-align: center;
      width: 300px;
      font-size: 20px;
    }
    @media (max-width: 480px) {
      text-align: center;
      width: 200px;
      padding: 12px;
      margin-top: 5%;
    }
`;

export const InputStyled = styled(Field)`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  @media (max-width: 768px) {
      width: 70%;
    
    }
    @media (max-width: 480px) {
      
      width:60%;
     
    }

`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  width: 95%;
  padding: 10px;
  background-color: rgba(17, 15, 50, 0.7512254901960784);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 28, 64, 0.751);
  }
`;

export const TextContainer = styled.div`
  margin: 5%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;

  p,
  h1 {
    font-size: 30px;
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    width: 500px;
    font-size: 20px;
  }

  @media (max-width: 560px) {
    p{
    font-size: 18px;
    width: 300px;
    padding: 12px;
    margin-top: 5%;}
  }

 
`;
