import styled from 'styled-components';
import IconImage from '../../icon/icon';
import Button from '../../button/button';

export const Section = styled.section`
   display: grid;
   grid-template-columns: 1fr 1fr;
   min-height: 100vh;
   align-items: center;
   margin-top: -50px;
   padding: 0 100px 100px 100px;

   @media (max-width: 768px) {
      flex-direction: column;
      display: flex;
      justify-content: center;
   }
`;

export const ImageContainer = styled.div`
   position: relative;
   width: 550px;
   height: 850px;
   margin-left: 10px;
   justify-self: start;

   @media (max-width: 768px) {
      width: 400px;
      align-items: start;
      height: 720px;
   }

   @media (max-width: 480px) {
      width: 300px;
      height: 540px;
   }
`;

export const StyledIconImage = styled(IconImage)`
   object-fit: cover;
   z-index: 10;
`;

export const Title = styled.h1`
   position: absolute;
   top: 180px;
   font-family: 'Vesper Libre', serif;
   font-size: 200px;
   color: rgba(128, 128, 128, 0.2);
   -webkit-text-stroke: 1px rgba(128, 128, 128, 0.5);

   background: linear-gradient(90deg, white, #d3d3d3);
   -webkit-background-clip: text;
   background-clip: text;
   color: transparent;

   letter-spacing: 10px;
   z-index: 5;

   @media (max-width: 768px) {
      font-size: 150px;
      letter-spacing: 10px;
      margin-left: -60px;
   }

   @media (max-width: 480px) {
      font-size: 100px;
      letter-spacing: 5px;
   }
`;

export const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 15;
   max-width: 500px;
   justify-self: end;

   @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
      gap: 15px;
   }
`;

export const StudioTitle = styled.h2`
   font-family: 'Viaoda Libre', cursive;
   font-size: 65px;
   color: #000;
   text-decoration: line-through;
   z-index: 15;

   @media (max-width: 768px) {
      font-size: 35px;
   }

   @media (max-width: 480px) {
      font-size: 30px;
   }
`;

export const Description = styled.p`
   font-family: 'Vesper Libre', serif;
   font-size: 30px;
   color: #000;
   width: 100%;
   z-index: 15;
   margin-top: 15px;

   @media (max-width: 768px) {
      font-size: 18px;
      max-width: 250px;
   }

   @media (max-width: 480px) {
      font-size: 16px;
      max-width: 200px;
   }
`;

export const BookButton = styled(Button)`
   width: 390px;
   height: 90px;
   z-index: 15;
   margin-top: 115px;

   @media (max-width: 768px) {
      width: 300px;
      height: 70px;
   }

   @media (max-width: 480px) {
      width: 250px;
      height: 60px;
   }
`;
