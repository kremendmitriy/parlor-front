import Image from 'next/image';
import { ImageContainer, TextOverlay } from './DesignHeaderImageStyled';

export const DesignHeaderImage = () => {
   return (
      <ImageContainer>
         <Image
            src="/images/designs-page-icons/design-page-header.png"
            alt="Designs Header Image"
            fill
            quality={100}
         />
         <TextOverlay>Designs</TextOverlay>
      </ImageContainer>
   );
};
