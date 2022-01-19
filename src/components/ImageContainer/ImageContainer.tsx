import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';

export interface IImageContainer {
  src: string;
  alt: string;
}

const useStyles: any = makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
}));

const ImageContainer: FC<IImageContainer> = ({ src, alt }) => {
  const styles = useStyles();
  return <img src={src} alt={alt} className={styles.root} />;
};

export default ImageContainer;
