import React, { useLayoutEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  const [navbarActive, setNavbarActive] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('scroll', (e) => {
        if(window.pageYOffset > 0) {
            setNavbarActive(true);
        } else{
            setNavbarActive(false);
        }
    })
  }, [])

  return (
    <div className={navbarActive? classes.header__active : classes.header}>
        <div className={classes.header__container}>
            <img className={classes.header__logo} src='http://cdn.shopify.com/s/files/1/0499/2584/9251/files/1091_JAIR_HD_2_1200x1200.png?v=1609539165' alt='Header Logo'/>
            <h2 className={navbarActive? classes.header__titleActive : classes.header__title}>J<span>BMA</span></h2>
            <nav className={classes.header__menu}>
                    <a className={navbarActive? classes.header__menuLinkActive : classes.header__menuLink} href='#'><b>Home</b></a>
                    <a className={navbarActive? classes.header__menuLinkActive : classes.header__menuLink} href='#'><b>Projects</b></a>
                    <a className={navbarActive? classes.header__menuLinkActive : classes.header__menuLink} href='#'><b>Contact</b></a>
            </nav>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    header: {
        position: 'fixed',
        width: '100%',
        padding: '.6rem 0',
        background: 'none',
        zIndex: '1000',
        transition: 'all .3s ease'
    },
    header__active: {
        position: 'fixed',
        width: '100%',
        padding: '1rem 0',
        backgroundColor:'rgb(255,255,255)',
        zIndex: '1000',
        transition: 'all .3s ease',
        boxShadow: '0px 8px 9px 0px rgba(0,0,0,0.51)'
    
    },
    header__container: {
        width: '94%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header__logo: {
        width: '80px',
        height: '60px'
    },
    header__title: {
        color: '#222831',
        fontSize: '3rem',
        letterSpacing: '-.3rem',
        '& span': {
            fontSize: '2rem',
            color: '#FFF',
            letterSpacing: '.1px'
        }
    },
    header__titleActive: {
        color: '#222831',
        fontSize: '3rem',
        letterSpacing: '-.3rem',
        '& span': {
            fontSize: '2rem',
            color: '#000',
            letterSpacing: '.1px'
        }
    },
    header__menu: {
        width: '100%',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        gap: theme.spacing(2)
    },
    header__menuLink: {
        color: '#FFF',
        textDecoration: 'none',
        letterSpacing: '1.4px'
    },
    header__menuLinkActive: {
        color: '#222831',
        textDecoration: 'none',
        letterSpacing: '1.4px'
    }
}))

export default Header