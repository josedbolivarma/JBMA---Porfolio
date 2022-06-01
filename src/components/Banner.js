import React from 'react';

import video from '../assets/tinta.mp4';

import { makeStyles } from '@material-ui/core';

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>        
        <video autoPlay loop playsInline muted className={classes.banner__video} src={video}></video>
        <div className={classes.banner__content}>
            <h2 className={classes.banner__contentTitle}><i>MY NAME IS</i> <br /><span><i>JOSÉ BOLÍVAR</i></span></h2>
            <h4 className={classes.banner__contentSubtitle}><b>PROJECTS <span className={classes.banner__contentSpan}>&</span> PORTFOLIO</b></h4>
        </div>
        {/* <CardBorder /> */}
        {/* <Search /> */}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    banner: {
        position: 'relative',
        top: '0',
        width: '100%',
        opacity: '.8',
        height: '90vh',
        marginBottom: '4rem',
        backgroundRepeat: 'no-repeat'
    },
    banner__video: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    banner__content: {
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '5%',
    },
    banner__contentTitle: {
        color: '#FFF',
        fontSize: '2.2rem',
        letterSpacing: '1.4px',
        '& span': {
            letterSpacing: '6px',
            color: '#F9F7F7',
            fontWeight: '900'
        }
    },
    banner__contentSubtitle: {
        fontSize: '1.4rem',
        letterSpacing: '1.8px'
    },
    banner__contentSpan: {
        color: '#FFF',
        fontSize: '2.4rem',
        fontWeight: '100'
    }
}))

export default Banner