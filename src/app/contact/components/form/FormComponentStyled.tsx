import styled from 'styled-components';

export const FormContainer = styled.div`
   margin: 20px auto;
   width: 800px;

   form {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 40px 0 20px 0px;
      border: 3px solid #ffffff;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1),
         -2px -2px 5px rgba(255, 255, 255, 0.5);
      position: relative;
      z-index: 1;

      &::before {
         content: '';
         position: absolute;
         top: 0px;
         left: 0px;
         right: -16px;
         bottom: -16px;
         border: 13px solid #4a4a4a;
         z-index: -1;
      }
   }

   p {
      font-size: 16px;
      color: #ff0000;
   }
`;
