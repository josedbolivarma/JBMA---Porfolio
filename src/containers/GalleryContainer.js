import React from 'react';

import { makeStyles } from '@material-ui/core';
import Gallery from '../components/Gallery';

const GalleryContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.galleryContainer}>
        <div className={classes.galleryContainer__container}>
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    galleryContainer: {
        width: '100%',
        height: '100%',
        margin: '4rem 0'
    },
    galleryContainer__container: {
        width: '94%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: theme.spacing(1.5),
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        }
    }
}))

export default GalleryContainer