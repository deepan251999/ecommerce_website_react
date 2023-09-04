import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CardMedia, Button, Container, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function ShoppingCart(props) {
    const {
        cartItem,
        setCartItem
    } = props;

    const navigate = useNavigate();

    const handleDeleteItemCart = (id) => {
        const cartItemDelete = cartItem.filter((item) => item.id !== id)
        setCartItem(cartItemDelete);
    };

    const handleIncreaseQuantity = (id) => {
        const updatedQuantityIncrementCart = cartItem.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItem(updatedQuantityIncrementCart);
    };

    const handleDecreaseQuantity = (id) => {
        const updatedQuantityDecreaseCart = cartItem.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItem(updatedQuantityDecreaseCart);
    };

    const handleCheckOut = () => {
        if (cartItem.length > 0) {
            navigate('/checkout')
        }
        
    }

    return (
        <React.Fragment>
            <Container maxWidth="xl" sx={{ bgcolor: '#faf5f5', position: 'sticky', top: 88, zIndex: 998 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center', py: 3, mb: 2 }}>
                    <Typography sx={{ fontSize: 30, fontWeight: 500 }}>ShoppingCart</Typography>
                    <Typography>
                        <Link to='/home' style={{ textDecoration: 'none', color: '#030202' }}>Home / </Link>
                        ShoppingCart
                    </Typography>
                </Stack>
            </Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PRODUCT</TableCell>
                            <TableCell align="center">QUANTITY</TableCell>
                            <TableCell align="right">PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            cartItem.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ width: 600 }}>
                                        <Stack direction='row'>
                                            <Box sx={{ width: 150 }}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    sx={{ width: 150 }}
                                                    image={item.image[0]}
                                                    alt={item.title}
                                                />
                                            </Box>
                                            <Box px={3}>
                                                <Typography>{item.title}</Typography>
                                                <Typography>{item.category}</Typography>
                                                <Typography sx={{ color: "#777" }}>{item.price}</Typography>
                                            </Box>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center" sx={{ width: "40%" }}>
                                        <Stack direction='row' sx={{ justifyContent: 'center' }}>
                                            <Button
                                                aria-label="reduce"
                                                sx={{ border: '1px solid rgb(89, 187, 187)' }}
                                                onClick={() => handleDecreaseQuantity(item.id)}
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </Button>
                                            <Typography sx={{ mx: 2, pt: 1 }}>{item.quantity}</Typography>
                                            <Button
                                                aria-label="increase"
                                                sx={{ border: '1px solid rgb(89, 187, 187)' }}
                                                onClick={() => handleIncreaseQuantity(item.id)}
                                            >
                                                <AddIcon fontSize="small" />
                                            </Button>
                                            <Button onClick={() => handleDeleteItemCart(item.id)}>
                                                <DeleteIcon sx={{ color: '#ff5252' }} />
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="right" sx={{ width: "20%" }}>{ Math.round(item.price) * item.quantity}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction='row' sx={{ p: 3, justifyContent: 'end' }}>
                <Box sx={{ width: 400 }}>
                    <Typography sx={{ fontWeight: 500, fontSize: 24, pl: 3 }}>Total : {cartItem.reduce((total, item) => total + (Math.round(item.price) * item.quantity), 0)} </Typography>
                    <Button
                        onClick={handleCheckOut}
                        sx={{ bgcolor: '#ff5252', width: 200, px: 4, py: 1, mt: 3, color: "#fff", ":hover": { bgcolor: "#ff5252", color: "#fff" } }}
                    >
                        CHECK OUT
                    </Button>
                </Box>
            </Stack>
        </React.Fragment>
    )
}

export default ShoppingCart;