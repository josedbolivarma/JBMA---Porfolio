import React from 'react'
import Banner from '../components/Banner';

import { makeStyles } from '@material-ui/core';
import GalleryContainer from '../containers/GalleryContainer';
import CardBorder from '../components/CardBorder';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
        <Banner />
        <CardBorder />
        <GalleryContainer />
        
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    home: {
        width: '100%',
        height: '100%'
    }
}))

export default Home