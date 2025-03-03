import {
   Title,
   CardContainer,
   InfoContainer,
   ArtistDetails,
   ArtistImageContainer,
   ButtonsContainer,
   NickNameContainer,
} from './ArtistCardStyled';
import Button from '@/app/(components)/button/button';
import Image from 'next/image';
import Link from 'next/link';

type ArtistCardProps = {
   artistName: string;
   artistDetails: string;
   nickName: string;
   imageUrl: string;
};

export const ArtistCard = ({
   artistName,
   nickName,
   artistDetails,
   imageUrl,
}: ArtistCardProps) => {
   return (
      <>
         <CardContainer>
            <InfoContainer>
               <Title>{artistName}</Title>
               <ArtistDetails>{artistDetails}</ArtistDetails>
               <ButtonsContainer>
                  <Link href="/contact">
                     <Button width="300px">Contact</Button>
                  </Link>
                  <Button width="300px">Works</Button>
               </ButtonsContainer>
            </InfoContainer>
            <ArtistImageContainer>
               <Image src={imageUrl} alt="Tattoo-artist photo" fill></Image>
               <NickNameContainer>{nickName}</NickNameContainer>
            </ArtistImageContainer>
         </CardContainer>
      </>
   );
};
