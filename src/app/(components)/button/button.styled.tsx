import styled from 'styled-components';

type StyledButtonProps = {
   width?: string;
   height?: string;
   backgroundColor?: string;
   color?: string;
   border?: string;
   borderRadius?: string;
   fontSize?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
   width: ${({ width }) => width || '390px'};
   height: ${({ height }) => height || '90px'};
   background-color: ${({ backgroundColor }) => backgroundColor || 'black'};
   color: ${({ color }) => color || 'white'};
   border: ${({ border }) => border || 'none'};
   border-radius: ${({ borderRadius }) => borderRadius || '45px'};
   align-self: center;
   cursor: pointer;
   font-family: 'Vesper Libre', serif;
   font-size: ${({ fontSize }) => fontSize || '24px'};
   letter-spacing: 2px;
   transition: background-color 0.3s ease, transform 0.3s ease;

   &:hover {
      background-color: #333;
      transform: scale(1.05);
   }

   &:active {
      transform: scale(0.98);
   }

   @media (max-width: 768px) {
      width: ${({ width }) => (width ? `calc(${width} - 50px)` : '300px')};
      height: ${({ height }) => (height ? `calc(${height} - 20px)` : '70px')};
   }

   @media (max-width: 480px) {
      width: ${({ width }) => (width ? `calc(${width} - 90px)` : '250px')};
      height: ${({ height }) => (height ? `calc(${height} - 30px)` : '60px')};
   }
`;
