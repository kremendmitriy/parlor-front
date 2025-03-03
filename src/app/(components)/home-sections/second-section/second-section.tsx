import Link from 'next/link';
import {
   Section,
   ImageContainer,
   StyledIconImage,
   Description,
   DesignsButton,
   InfoContainer,
   VariousTitle,
} from './second-section.styled';
export const SecondSection = () => {
   return (
      <Section>
         <InfoContainer>
            <VariousTitle>VARIOUS STYLES</VariousTitle>
            <Description>
               Explore a vast array of tattoo styles, including traditional,
               neo-traditional, realism, watercolor, geometric, tribal,
               minimalist, Japanese, blackwork, illustrative, and more. Each
               style embodies unique aesthetics and expressions, enabling
               personalized and meaningful body art that highlights
               individuality and creativity through diverse techniques and
               stunning, intricate designs.
            </Description>
            <Link href="/designs">
               <DesignsButton>DESIGNS</DesignsButton>
            </Link>
         </InfoContainer>
         <ImageContainer>
            <StyledIconImage
               src="/images/home-icons/styles.png"
               alt="styles"
               width={600}
               height={650}
            ></StyledIconImage>
         </ImageContainer>
      </Section>
   );
};
