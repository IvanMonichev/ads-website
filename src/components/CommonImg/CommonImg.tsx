import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface CommonImgProps {
  src: string;
  alt?: string;
}
const CommonImg: FC<CommonImgProps> = ({ src, alt = '' }) => {
  const [img, setImg] = useState('null');
  useEffect(() => {
    try {
      setImg(src);
    } catch (e) {
      setImg(require(`./../../assets/img/default.jpg`));
    }
  }, []);

  return <LazyLoadImage alt={alt} src={img} effect='blur' />;
};

export default CommonImg;
