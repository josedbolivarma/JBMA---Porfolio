import React from 'react';

import { makeStyles } from '@material-ui/core';

const Gallery = () => {
  const classes = useStyles();

  return (
    <div className={classes.gallery}>
        <div className={classes.gallery__image}>
        </div>

        <div className={classes.gallery__content}>
            <h2 className={classes.gallery__title}>DOTA 2 APP</h2>
            <p className={classes.gallery__text}>Clone app inspired in Dota 2 App</p>
            <div className={classes.gallery__actions}>
                <button className={classes.gallery__btn}>Ver Detalle</button>
                <div className={classes.gallery__actionsLinks}>
                    <a className={classes.gallery__actionsLink} href='#'>Action Link</a>
                    <a className={classes.gallery__actionsLink} href='#'>Action Link</a>
                    <a className={classes.gallery__actionsLink} href='#'>Action Link</a>
                </div>
            </div>
        </div> 
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: '100%',
        height: '300px',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer',
            '& $gallery__image': {
                opacity: '.5',
            },
            '& $gallery__content': {
                bottom: '-40%',
            },
            '& $gallery__actions': {
                opacity: '1',
            }
        }
    },
    gallery__image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // backgroundSize: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("https://cutewallpaper.org/23/amazon-logo-wallpaper-hd/206512868.jpg")',
        backgroundPosition: 'center'
    },
    gallery__content: {
        position: 'absolute',
        bottom: '-70%',
        textAlign: 'center',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',        
        // paddingBottom: '2rem',
        color: '#FFF',
        transition: 'all .3s ease'
    },
    gallery__actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: '0',
        height: '30%',
        transition: 'opacity .3s ease',
        marginTop: theme.spacing(2),
        padding: '0 1rem'
    },
    gallery__btn: {
        padding: '.2rem .6rem',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        borderRadius: '50px',
        color: '#FFF',
        border: '1px solid #FFF',
        cursor: 'pointer'
    },
    gallery__actionsLinks: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    gallery__actionsLink: {
        color: '#FFF',
        textDecoration: 'none'
    }
}))

export default Gallery