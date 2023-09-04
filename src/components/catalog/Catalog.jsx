import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Stack, CardMedia, Card, CardActionArea, CardContent, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Catalog(props) {
    const {
        cartItem,
        setCartItem,
        favouriteCartItem,
        setFavouriteCartItem,
        setProductDataUrl,
        imageArrayUpdatedProductData
    } = props;

    const [catageryList, setCatageryList] = useState([
        { id: 1, name: "All" },
        { id: 2, name: "men's clothing" },
        { id: 3, name: "jewelery" },
        { id: 4, name: "electronics" },
        { id: 5, name: "women's clothing" }
    ]);

    const handleAddShoppingCart = (item) => {
        const isCartItem = cartItem.some((items) => items.id === item.id);

        if (isCartItem) {
            alert('Is Product in cart');
        }
        else {
            setCartItem([...cartItem, { ...item, quantity: 1 }]);
        }
    };

    const handleAddFavourite = (item) => {
        const isCartItem = favouriteCartItem.some((items) => items.id === item.id);

        if (isCartItem) {
            alert('Is Product in cart');
        }
        else {
            setFavouriteCartItem([...favouriteCartItem, { ...item }]);
        }
    };

    const handleCatageryList = (name) => {
        if (name === "All") {
            var productUrl = "https://fakestoreapi.com/products";
        }
        if (name === "men's clothing") {
            var productUrl = "https://fakestoreapi.com/products/category/men's%20clothing";
        }
        if (name === "jewelery") {
            var productUrl = "https://fakestoreapi.com/products/category/jewelery";
        }
        if (name === "electronics") {
            var productUrl = "https://fakestoreapi.com/products/category/electronics";
        }
        if (name === "women's clothing") {
            var productUrl = "https://fakestoreapi.com/products/category/women's%20clothing";
        }
        setProductDataUrl(productUrl);
    };

    const catalogButtonStyle = {
        bgcolor: '#ff5252',
        color: "#fff",
        ":hover": { bgcolor: "#F02424" },
        borderRadius: 10
    };

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ bgcolor: '#faf5f5', position: 'sticky', top: 88, zIndex: 998 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center', py: 3, mb: 2 }}>
                    <Typography sx={{ fontSize: 30, fontWeight: 500 }}>Catalog</Typography>
                    <Typography>
                        <Link to='/home' style={{ textDecoration: 'none', color: '#030202' }}>Home / </Link>
                        Catalog
                    </Typography>
                </Stack>
            </Container>
            <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
                <ToggleButtonGroup
                    color="primary"
                    aria-label="Platform"
                >
                    {
                        catageryList.map((item) => (
                            <ToggleButton key={item.id} value={item.name} sx={catalogButtonStyle} onClick={() => handleCatageryList(item.name)}>{item.name}</ToggleButton>
                        ))
                    }
                </ToggleButtonGroup>
            </Stack>
            <Stack my={5} direction='row' sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    imageArrayUpdatedProductData.map((item) => (
                        <Card sx={{ maxWidth: 345, m: 2 }} key={item.id} >
                            <CardActionArea sx={{ width: 200, p: 1 }} >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image[0]}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ color: '#ff5252' }}>
                                        {item.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.category}
                                    </Typography>
                                </CardContent>
                                <LocalGroceryStoreIcon sx={{ mx: 2, ":hover": { color: '#ff5252' } }} onClick={() => { handleAddShoppingCart(item) }} />
                                <FavoriteIcon onClick={() => handleAddFavourite(item)} sx={{ ":hover": { color: '#ff5252' } }} />
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Stack>
        </React.Fragment>
    )
}

export default Catalog;