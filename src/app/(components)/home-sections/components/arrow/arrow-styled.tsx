import styled from 'styled-components';

interface ArrowProps {
   rotate?: boolean;
}

export const IndicatorContainer = styled.div`
   position: fixed;
   right: 20px;
   top: 50%;
   transform: translateY(-50%);
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   z-index: 1000;
`;

export const VerticalText = styled.div`
   writing-mode: vertical-rl;
   text-orientation: mixed;
   font-family: Arial, sans-serif;
   font-size: 20px;
   color: #4a4a4a;
   letter-spacing: 6px;
   margin: 20px 0;

   text-shadow: -1px -1px 0 #39ff14, 1px -1px 0 #39ff14, -1px 1px 0 #39ff14,
      1px 1px 0 #39ff14;
`;

export const Arrow = styled.img<ArrowProps>`
   width: 24px;
   height: 70px;
   cursor: pointer;
   margin: 15px 0;

   transform: ${(props) => (props.rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
