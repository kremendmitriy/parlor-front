import { styled } from 'styled-components';

export const CardContainer = styled.div`
   display: grid;
   grid-template-columns: 60% auto;
   padding: 60px 80px;
   position: relative;
   gap: 20px;
   margin-bottom: 70px;

   @media (max-width: 1200px) {
      padding: 40px 100px;
      grid-template-columns: 1fr auto;
   }

   @media (max-width: 900px) {
      padding: 40px 50px;
      grid-template-columns: 1fr;
      gap: 30px;
   }

   @media (max-width: 600px) {
      padding: 20px 30px;
      grid-template-columns: 1fr;
      gap: 20px;
   }
`;

export const Title = styled.h2`
   font-size: 70px;
   font-family: 'Vesper Libre', serif;
   color: #000;
   font-weight: 700;

   @media (max-width: 900px) {
      font-size: 50px;
   }

   @media (max-width: 600px) {
      font-size: 40px;
   }
`;

export const ArtistDetails = styled.div`
   font-size: 25px;
   font-family: 'Viaoda Libre', serif;
   color: #ffffff;

   @media (max-width: 900px) {
      font-size: 20px;
   }

   @media (max-width: 600px) {
      font-size: 18px;
   }
`;

export const ArtistImageContainer = styled.div`
   margin: 0 auto;
   width: 400px;
   height: 620px;
   position: relative;

   & img {
      border: 6px solid #000;
      /* Заменили неоновый зелёный на мягкий графитовый */
      box-shadow: 0px 0px 10px 5px rgba(46, 46, 46, 0.8);
      transition: box-shadow 0.3s ease-in-out;
   }

   @media (max-width: 900px) {
      align-items: center;
   }

   @media (max-width: 600px) {
      & img {
         width: 100%;
         height: auto;
      }
   }
`;

export const ButtonsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   margin-top: auto;
   width: 100%;

   @media (max-width: 900px) {
      justify-content: center;
      flex-direction: column;
      gap: 15px;
   }

   @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 900px;
   padding-right: 50px;

   @media (max-width: 900px) {
      width: 100%;
   }
`;

export const NickNameContainer = styled.div`
   font-size: 60px;
   font-family: 'Vesper Libre', serif;
   color: #ffffff;
   position: absolute;
   bottom: -20px;
   left: 30%;
   transform: translateX(-40%);
   text-shadow: 0 0 35px rgba(46, 46, 46, 0.8), 0 0 35px rgba(46, 46, 46, 1);
   pointer-events: none;

   @media (max-width: 900px) {
      font-size: 60px;
   }

   @media (max-width: 600px) {
      font-size: 40px;
      bottom: -20px;
   }
`;
