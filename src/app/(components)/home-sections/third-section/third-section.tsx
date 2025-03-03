import { YouTubeEmbed } from '../components/youtubeVideo/culture-tattoo.video';
import {
   Section,
   InfoContainer,
   CaltureTitle,
   Description,
   StyledIconImage,
} from './third-section.styled';

export const ThirdSection = () => {
   return (
      <Section>
         <InfoContainer>
            <CaltureTitle>Tattoo culture</CaltureTitle>
            <Description>
               Tattoo culture celebrates artistic expression, tradition, and
               personal storytelling. Rooted in ancient rituals, it has evolved
               into a diverse global phenomenon embracing various styles and
               meanings. Today, tattoos symbolize identity, heritage, and
               individuality, fostering a vibrant and inclusive community.
            </Description>

            <StyledIconImage
               src="/images/home-icons/male-in-work.png"
               alt="styles"
               width={250}
               height={250}
            ></StyledIconImage>
         </InfoContainer>
         <YouTubeEmbed embedId="5cAsNIZQdM4" />
      </Section>
   );
};
