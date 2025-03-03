import Image from 'next/image';
import { ImageContainer } from './DesignImageStyled';
import Link from 'next/link';

type DesignImageProps = {
   src: string;
   alt: string;
};

export const DesignImage = ({ src, alt }: DesignImageProps) => {
   return (
      <ImageContainer>
         <Link href="/contact">
            <Image src={src} alt={alt} fill objectFit="cover" quality={100} />
         </Link>
      </ImageContainer>
   );
};
