import React from 'react';
import { makeStyles } from '@material-ui/core';

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
        <div className={classes.search__container}>
            <h2 className={classes.search__containerLink}>PORTFOLIOS</h2>
            <h2 className={classes.search__containerLink}>BORING PROJECTS</h2>
            <h2 className={classes.search__containerLink}>CLONES</h2>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    search: {
        width: '50%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '93.5%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '2px',
        border: '2px solid #FFF',
    },
    search__container: {
        width: '94%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing(1)
    },
    search__containerLink: {
        color: '#FFF',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all .3s ease',
        '&:hover': {
            fontSize: '1.2rem'
        }
    }
}))

export default Search