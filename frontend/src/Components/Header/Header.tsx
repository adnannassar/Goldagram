import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu'; // Import the MenuIcon

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => currentPath === path;

    const buttonStyle = (path: string) => ({
        backgroundColor: isActive(path) ? '#d4af37' : 'transparent',
        color: isActive(path) ? 'black' : 'inherit',
        marginLeft: '1rem',
        '&:hover': {
            backgroundColor: '#d4af37',
            color: 'black',
        },
    });

    // State for handling the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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

                {/* Mobile menu */}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleMobileMenu}
                    sx={{
                        display: { xs: 'block', sm: 'none' }, // Show the hamburger menu icon on small screens
                        '& .MuiIconButton-root': {
                            color: 'gold', // Set the color to gold
                        },
                    }}
                >
                    <MenuIcon /> {/* Use MenuIcon */}
                </IconButton>

                {/* Desktop menu */}
                <div className="d-none d-sm-block">
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

                {/* Mobile menu drawer */}
                <Drawer anchor="right" open={isMobileMenuOpen} onClose={toggleMobileMenu}>
                    <div
                        role="presentation"
                        onClick={toggleMobileMenu}
                        onKeyDown={toggleMobileMenu}
                    >
                        <List>
                            <ListItem  component={Link} to="/" style={buttonStyle('/')}>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem  component={Link} to="/add-gold" style={buttonStyle('/add-gold')}>
                                <ListItemText primary="Add Gold" />
                            </ListItem>
                            <ListItem  component={Link} to="/my-gold" style={buttonStyle('/my-gold')}>
                                <ListItemText primary="My Gold" />
                            </ListItem>
                        </List>
                        <Divider />
                    </div>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
