import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// import logo from '../../assets/shop.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles(); //hook
    const location = useLocation();//hook
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    //header icon、title、購物車icon
    //在icon上用Link連結到cart(對應App.js的cart)，location.pathname運用判斷式判斷是否隱藏cart的icon
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/home" variant="h6" className={classes.title} color="inherit" onClick={closeMobileMenu}>
                        {/* <img src={logo} alt="Commerce.js" height="25px" className={classes.image} /> */}
                        台東觀光民宿
                    </Typography>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Typography component={Link} to="/" className='nav-links' onClick={closeMobileMenu}>
                                民宿分類
                            </Typography>
                        </li> 
                        <li className='nav-item'>
                            <Typography component={Link} to="/" className='nav-links' onClick={closeMobileMenu}>
                                關於我們
                            </Typography>
                        </li>                       
                    </ul>
                    <div className={classes.grow} />
                    {location.pathname === '/' ? (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" className={classes.cartIcon}>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    ) : null}
                    
                </Toolbar>

            </AppBar>

        </div>
    )
}

export default Navbar