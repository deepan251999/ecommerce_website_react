import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Stack, CardMedia, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ClearIcon from '@mui/icons-material/Clear';

function Favourite(props) {
    const {
        favouriteCartItem,
        setFavouriteCartItem,
        setCartItem,
        cartItem
    } = props;

    const handleAddFavouriteCart = (item) => {
        const isFavouriteCartItem = cartItem.some((items) => items.id === item.id);

        if (isFavouriteCartItem) {
            alert('Is Product in cart');
        }
        else {
            setCartItem([...cartItem, { ...item, quantity: 1 }]);
        }
    }

    const handleFavouriteRemove = (id) => {
        const FavouriteCartItemDelete = favouriteCartItem.filter((item) => item.id !== id)
        setFavouriteCartItem(FavouriteCartItemDelete);
    }

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ bgcolor: '#faf5f5', position: 'sticky', top: 88, zIndex: 998 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center', py: 3, mb: 2 }}>
                    <Typography sx={{ fontSize: 30, fontWeight: 500 }}>Favourite</Typography>
                    <Typography>
                        <Link to='/home' style={{ textDecoration: 'none', color: '#030202' }}>Home / </Link>
                        Favourite
                    </Typography>
                </Stack>
            </Container>
            <Stack my={5} direction='row' sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    favouriteCartItem.length > 0 ?
                        favouriteCartItem.map((item) => (
                            <Card sx={{ maxWidth: 345, m: 2, position: 'relative' }} key={item.id} >
                                <ClearIcon onClick={() => { handleFavouriteRemove(item.id) }} sx={{ color: '#F75F5F', cursor: 'pointer', position: 'absolute', top: 0, right: 0, zIndex: 1 }} />
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
                                    <LocalGroceryStoreIcon sx={{ mx: 2, ":hover": { color: '#ff5252' } }} onClick={() => handleAddFavouriteCart(item)} />
                                </CardActionArea>
                            </Card>
                        ))
                        :
                        <Typography variant="h5">No Favourite Products Added</Typography>
                }
            </Stack>
        </React.Fragment>
    )
}

export default Favourite;