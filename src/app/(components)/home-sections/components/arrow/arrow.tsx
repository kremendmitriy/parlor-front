import { IndicatorContainer, Arrow, VerticalText } from './arrow-styled';

export const ScrollIndicator = () => {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const scrollToBottom = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
   };

   return (
      <IndicatorContainer>
         <Arrow
            src="/images/home-icons/arrow.png"
            alt="Scroll to Bottom"
            onClick={scrollToTop}
            rotate
         />
         <VerticalText>FlintInc</VerticalText>
         <Arrow
            src="/images/home-icons/arrow.png"
            alt="Scroll to Bottom"
            onClick={scrollToBottom}
         />
      </IndicatorContainer>
   );
};

export default ScrollIndicator;
