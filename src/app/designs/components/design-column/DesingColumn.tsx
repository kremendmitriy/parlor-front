import { Column, Title } from './DesingColumnStyled';
import { DesignImage } from '../design-image/DesignImage';

type DesignColumnProps = {
   title: string;
   images: string[];
};

export const DesignColumn = ({ title, images }: DesignColumnProps) => {
   return (
      <Column>
         <Title>{title}</Title>
         {images.map((image, index) => (
            <DesignImage
               key={index}
               src={image}
               alt={`${title} image ${index + 1}`}
            />
         ))}
      </Column>
   );
};
