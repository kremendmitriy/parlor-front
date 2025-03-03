import styled from 'styled-components';
import IconImage from '../../icon/icon';
import Button from '../../button/button';

export const Section = styled.section`
   display: grid;
   grid-template-columns: 1fr 1fr;
   background-color: #2b2b2b;
   min-height: 100vh;
   align-items: center;
   padding: 100px;

   @media (max-width: 768px) {
      flex-direction: column;
      display: flex;
      justify-content: center;
   }
`;

export const ImageContainer = styled.div`
   position: relative;
   width: 650px;
   height: 650px;
   justify-self: end;

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

export const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index: 15;
   max-width: 500px;
   justify-self: start;
   @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
      gap: 15px;
   }
`;

export const VariousTitle = styled.h2`
   font-family: 'Viaoda Libre', cursive;
   font-size: 55px;
   color: #cbcbcb;
   z-index: 15;
   margin-bottom: 75px;

   @media (max-width: 768px) {
      font-size: 35px;
   }

   @media (max-width: 480px) {
      font-size: 30px;
   }
`;

export const Description = styled.p`
   font-family: 'Vesper Libre', serif;
   font-size: 20px;
   color: #a8a8a8;
   max-width: 400px;
   z-index: 15;
   margin-bottom: 75px;

   @media (max-width: 768px) {
      font-size: 18px;
      max-width: 250px;
   }

   @media (max-width: 480px) {
      font-size: 16px;
      max-width: 200px;
   }
`;

export const DesignsButton = styled(Button)`
   width: 390px;
   height: 90px;
   z-index: 15;
   font-family: 'Montserrat', sans-serif;
   font-size: 40px;
   background-color: #ececec;
   color: #2b2b2b;

   @media (max-width: 768px) {
      width: 300px;
      height: 70px;
   }

   @media (max-width: 480px) {
      width: 250px;
      height: 60px;
   }
`;
