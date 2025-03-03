import styled from 'styled-components';

export const ImageContainer = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 446px;

   &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(50, 42, 42, 0.9);
      z-index: 2;
   }
`;

export const TextOverlay = styled.h1`
   position: absolute;
   z-index: 3;
   letter-spacing: 75px;
   color: #eee;
   font-size: 150px;
   font-family: 'Viaoda Libre', cursive;
   text-align: center;

   text-shadow: 0 0 5px #006400, 0 0 10px #006400, 0 0 5px #00ff00,
      0 0 10px #00ff00;
`;
