import Image, { ImageProps } from 'next/image';
import React from 'react';

interface IconImageProps extends Omit<ImageProps, 'className'> {
   className?: string;
   alt: string;
   src: string;
}

export const IconImage: React.FC<IconImageProps> = ({
   className,
   src,
   alt,
   width,
   height,
   ...props
}) => (
   <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
      {...props}
   />
);

export default IconImage;
