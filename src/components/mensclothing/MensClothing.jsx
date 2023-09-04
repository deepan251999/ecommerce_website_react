import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Stack, CardMedia, Card, CardActionArea, CardContent } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

function MensClothing(props) {
    const {
        cartItem,
        setCartItem,
        favouriteCartItem,
        setFavouriteCartItem
    } = props;

    var mensClothingUrl = "https://fakestoreapi.com/products/category/men's%20clothing";

    const [mensClothingData, setMensClothingData] = useState([]);

    useEffect(() => {
        axios.get(mensClothingUrl)
            .then(response => setMensClothingData(response.data))
    }, [mensClothingUrl]);

    const imageArrayUpdatedMensClothingData = mensClothingData.map((item) => (
        { ...item, image: [item.image] }
    ));

    const handleAddCartElectronics = (item) => {
        const isCollectionCartItem = cartItem.some((cartItems) => cartItems.id === item.id);

        if (isCollectionCartItem) {
            alert('Is Product in cart')
        }
        else {
            setCartItem([...cartItem, { ...item, quantity: 1 }]);
        }
    };

    const handleAddFavoriteElectronics = (item) => {
        const isFavouriteElectronicsItem = favouriteCartItem.some((items) => items.id === item.id);

        if (isFavouriteElectronicsItem) {
            alert('Is Product in cart');
        }
        else {
            setFavouriteCartItem([...favouriteCartItem, { ...item }]);
        }
    };

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ bgcolor: '#faf5f5', position: 'sticky', top: 88, zIndex: 998 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center', py: 3, mb: 2 }}>
                    <Typography sx={{ fontSize: 30, fontWeight: 500 }}>Mens Clothing</Typography>
                    <Typography>
                        <Link to='/home' style={{ textDecoration: 'none', color: '#030202' }}>Home / </Link>
                        Mens Clothing
                    </Typography>
                </Stack>
            </Container>
            <Stack my={5} direction='row' sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    imageArrayUpdatedMensClothingData.map((item) => (
                        <Card sx={{ maxWidth: 345, m: 2 }} key={item.id} >
                            <CardActionArea sx={{ width: 200, p: 1 }} >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image[0]}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ color: '#ff5252' }}>
                                        {item.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.category}
                                    </Typography>
                                </CardContent>
                                <LocalGroceryStoreIcon onClick={() => handleAddCartElectronics(item)} sx={{ mx: 2, ":hover": { color: '#ff5252' } }} />
                                <FavoriteIcon onClick={() => handleAddFavoriteElectronics(item)} sx={{ ":hover": { color: '#ff5252' } }} />
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Stack>
        </React.Fragment>
    )
}

export default MensClothing;