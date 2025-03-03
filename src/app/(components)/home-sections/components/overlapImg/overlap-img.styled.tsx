import styled from 'styled-components';

export const Image = styled.img`
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   width: 250px;
   height: auto;
   z-index: 5;
   margin-top: -120px;
   pointer-events: none @media (max-width: 768px) {
      width: 150px;
   }

   @media (max-width: 480px) {
      width: 100px;
   }
`;
