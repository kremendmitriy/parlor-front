import styled from 'styled-components';

export const PaginationControls = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding-bottom: 20px;
`;

export const PaginationButton = styled.button`
   padding: 10px 20px;
   margin: 0 10px;
   cursor: pointer;
   border: none;
   background-color: #0070f3;
   color: white;
   border-radius: 5px;
   transition: background-color 0.3s;

   &:hover {
      background-color: #005bb5;
   }

   &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
   }
`;

export const PaginationText = styled.span`
   font-size: 18px;
`;
