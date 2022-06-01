import React from 'react';
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ComputerIcon from '@material-ui/icons/Computer';
import HelpIcon from '@material-ui/icons/Help';

const CardBorder = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardBorder}>
      <div className={classes.cardBorder__container}>
       <div className={classes.cardBorder__actions}>
            <AccountCircleIcon className={classes.cardBorder__iconMaterial}/>
            <ComputerIcon className={classes.cardBorder__iconMaterial}/>
            <HelpIcon className={classes.cardBorder__iconMaterial}/>
       </div>
      <div className={classes.cardBorder__imgBx}>
      <img
        className={classes.cardBorder__image}
        src='https://res.cloudinary.com/duzncuogi/image/upload/v1654100763/my-portfolio/foto4_xhivdj.jpg' alt='Card Avatar'/>
      </div>

        <div className={classes.cardBorder__content}>
            <div>
                <h2 className={classes.cardBorder__contentTitle}>ABOUT ME</h2>
            <div className={classes.cardBorder__boxText}>
                <p className={classes.cardBorder__contentText}>
                👋🏽Welcome to my website, my name is José David Bolívar Mayora I am 19 years old and saw in the city of Bogota, I am passionate in addition to knowing and exploring new technologies outdoor sports🏃🏽, lofi, rap and rock as musical genres🎶, anime, videogames🎮 and reading, as a select group of people I am passionate about <br /> <br />designing and developing websites on the front-end side, currently with the help of the react library and Angular framework. And other add-ons I can make each of the projects I work on possible.
                </p>
            </div>
            </div>
            <div className={classes.cardBorder__socialContent}>
                <img
                className={classes.cardBorder__socialIcon}
                src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='Social Icon'/>
                <img
                className={classes.cardBorder__socialIcon}
                src='https://seeklogo.com/images/L/linkedin-icon-logo-32AA14A009-seeklogo.com.png' alt='Social Icon'/>
                <img
                className={classes.cardBorder__socialIcon}
                src='https://cdn-icons-png.flaticon.com/512/87/87390.png' alt='Social Icon'/>
            </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    cardBorder: {
        position: 'relative',
        width: '100%',
        height: '420px',
        margin: '8rem 0'
    },
    cardBorder__container: {
        width: '90%',
        margin: '0 auto',
        backgroundColor: '#111',
        borderRadius: '12px',
        display: 'grid',
        gridTemplateColumns: '40px .6fr 1fr',
        height: '420px',
        gap: theme.spacing(2),
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '20px 1fr',
        }
    },
    cardBorder__actions: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        gap: theme.spacing(1.8)
    },
    cardBorder__imgBx: {
        width: '100%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    cardBorder__content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardBorder__image: {
        position: 'absolute',
        top: '-80px',
        width: '85%',
        height: '445px',
        boxShadow: '0px 8px 9px 0px rgba(0,0,0,0.51)',
        objectFit: 'cover'
    },
    cardBorder__contentTitle: {
        color: '#FFF',
        position: 'relative',
        fontSize: '2.4rem',
        letterSpacing: '2px'
    },
    cardBorder__contentText: {
        color: '#FFF',
        fontSize: '1.2rem'
    },
    cardBorder__socialContent: {
        display: 'flex',
        justifyContent: 'left',
        gap: theme.spacing(4)
    },
    cardBorder__boxText: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        margin: '1rem 0'
    },
    cardBorder__socialIcon: {
        width: '40px',
        height: '40px',
    },
    cardBorder__iconMaterial: {
        color: '#FFF',
        width: '100%',
        height: '40px',
        cursor: 'pointer',
        transition: '.3s all ease-in-out',
        '&:hover': {
            color: '#8850ff'
        }
    }
}))

export default CardBorder