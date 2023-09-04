import { Box, Grid, CardMedia, Typography, Badge } from '@mui/material';
import React from 'react';
import Logo from '../../Assets/logo.webp';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar(props) {
    const {
        cartItem,
        favouriteCartItem
    } = props;

    const [navbarList, setNavbarList] = useState([
        { id: 1, name: "Catalog", click: false },
        { id: 2, name: "Collection", click: false },
        { id: 3, name: "Blog", click: false },
        { id: 4, name: "Contact", click: false }
    ]
    );

    const handleNavbar = (item, index) => {
        setNavbarList(items =>
            items.map(item =>
                item.id === index + 1 ? { ...item, click: true } : { ...item, click: false }
            )
        );
    }

    return (
        <React.Fragment>
            <Grid container sx={{ px: 2, py: 3, borderBottom: '1px solid #dedede', position: 'sticky', top: 0, bgcolor: '#fff', zIndex: 997 }}>
                <Grid item sm={3} >
                    <Box sx={{ width: 200 }}>
                        <CardMedia
                            component="img"
                            image={Logo}
                            alt='logo'
                            sx={{ cursor: 'pointer' }}
                        />
                    </Box>
                </Grid>
                <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Link to={"/"} style={{ textDecoration: 'none' }} >
                        <Typography sx={{color:"#030202" , cursor: 'pointer', ":hover": { color: '#ff5252' }}}>
                            Home
                        </Typography>
                    </Link>
                    {
                        navbarList.map((item, index) => (
                            <Link to={"/" + item.name} key={index} style={{ textDecoration: 'none' }}>
                                <Typography
                                    key={index}
                                    onClick={() => { handleNavbar(item.name, index) }}
                                    sx={{ cursor: 'pointer', ":hover": { color: '#ff5252' }, color: item.click ? "#ff5252" : "#030202" }}
                                >
                                    {item.name}
                                </Typography>
                            </Link>
                        ))
                    }
                </Grid>
                <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to={'/favourite'} style={{ textDecoration: 'none', marginRight: 20 }} >
                        <Badge badgeContent={favouriteCartItem.length} color="primary">
                            <FavoriteIcon sx={{ cursor: 'pointer', color: 'black', ":hover": { color: '#ff5252' } }} />
                        </Badge>
                    </Link>
                    <Link to={'/shoppingcart'} style={{ textDecoration: 'none' }}>
                        <Badge badgeContent={cartItem.length} color="primary">
                            <LocalGroceryStoreIcon
                                sx={{ cursor: 'pointer', color: 'black', ":hover": { color: '#ff5252' } }}
                            />
                        </Badge>
                    </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Navbar;