import styled from 'styled-components';

export const ImageContainer = styled.div`
   width: 250px;
   height: 400px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 115px;
   border-radius: 8px;
   border: 1px solid #000;
   overflow: hidden;
   box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
   transition: box-shadow 0.3s ease, transform 0.3s ease;

   &:hover {
      box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00;
      transform: scale(1.05);
   }
`;
