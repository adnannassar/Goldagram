// Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path:string) => currentPath === path;

    const buttonStyle = (path:string) => ({
        backgroundColor: isActive(path) ? '#d4af37' : 'transparent',
        color: isActive(path) ? 'black' : 'inherit',
        marginLeft: '1rem',
        '&:hover': {
            backgroundColor: '#d4af37',
            color: 'black',
        },
    });

    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer'
                }}>
                    <img src={logo} width={'30px'} alt={'logo'} style={{ marginRight: '0.1rem' }} />
                    <Typography variant="h6" style={{ color: '#e7cf81' }}>
                        oldagram
                    </Typography>
                </Link>
                <div>
                    <Button color="inherit" component={Link} to="/" style={buttonStyle('/')}>
                        Dashboard
                    </Button>
                    <Button color="inherit" component={Link} to="/add-gold" style={buttonStyle('/add-gold')}>
                        Add Gold
                    </Button>
                    <Button color="inherit" component={Link} to="/my-gold" style={buttonStyle('/my-gold')}>
                        My Gold
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
