import { FC } from 'react';

type ImageProps = {
  src: string;
  alt?: string;
};

const Image: FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />;
};

export default Image;
