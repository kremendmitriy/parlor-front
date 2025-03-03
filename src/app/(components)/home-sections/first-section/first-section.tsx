import {
   Section,
   ImageContainer,
   StyledIconImage,
   Title,
   StudioTitle,
   Description,
   BookButton,
   InfoContainer,
} from '../first-section/first-section.styled';

export const FirstSection = () => {
   return (
      <Section>
         <ImageContainer>
            <StyledIconImage
               src="/images/home-icons/male-body.png"
               alt="Male-body"
               fill
            />
            <Title>TATTOO</Title>
         </ImageContainer>
         <InfoContainer>
            <StudioTitle>Flint Inc</StudioTitle>
            <Description>
               Welcome to our Tattoo Studio, where artistry meets
               professionalism. Our skilled artists are dedicated to bringing
               your unique visions to life with precision and care.
            </Description>
            <BookButton
               onClick={() => alert('Booking functionality to be implemented!')}
            >
               Book now
            </BookButton>
         </InfoContainer>
      </Section>
   );
};
