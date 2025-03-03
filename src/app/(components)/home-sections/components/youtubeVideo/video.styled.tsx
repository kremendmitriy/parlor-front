import styled from 'styled-components';

export const VideoContainer = styled.div`
   position: relative;
   padding-bottom: 56.25%;
   padding-top: 45px;
   height: 0;
   overflow: hidden;
   border: 2px solid #39ff14;
   border-radius: 15px;
   box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);

   animation: pulse 2s infinite;
   @keyframes pulse {
      0% {
         box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
      }
      50% {
         box-shadow: 0 0 30px rgba(57, 255, 20, 0.7);
      }
      100% {
         box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
      }
   }

   @media (max-width: 768px) {
      border-width: 1.5px;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(57, 255, 20, 0.4);
   }

   @media (max-width: 480px) {
      border-width: 1px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(57, 255, 20, 0.3);
   }
`;

export const ResponsiveIframe = styled.iframe`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border: none;
   border-radius: 15px;

   @media (max-width: 768px) {
      border-radius: 12px;
   }

   @media (max-width: 480px) {
      border-radius: 10px;
   }
`;
