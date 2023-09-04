import React from 'react';
import { Container, Typography, TextField, Grid, Box, Button, Stack, CardMedia, Paper } from '@mui/material';

function Checkout({ cartItem }) {

    return (
        <>
            <Container maxWidth="xl" sx={{ py: 5, overflowY: "hidden" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{ px: 2 }}>
                        <Box>
                            <Typography variant='h6' sx={{ pb: 1 }}>Contact</Typography>
                            <TextField label="Phone Number" variant="outlined" style={{ width: "100%" }} />
                        </Box>
                        <Typography variant='h6' sx={{ pb: 1, pt: 5 }}>Shipping address</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="Country/Region" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="First Name" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Last Name" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Address" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label="City" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label="State" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label="Pincode" variant="outlined" style={{ width: "100%" }} />
                            </Grid>
                        </Grid>
                        <Stack direction='row' sx={{ justifyContent: 'end', pt: 4, pr: 4 }}>
                            <Button variant="contained" sx={{ bgcolor: '#ff5252', px: 4, py: 1, ":hover": { bgcolor: "#ff5252", color: "#fff" } }}>Continue to Shopping</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sx={{ height: 500, overflow: "hidden", overflowY: "scroll" }} >
                        {
                            cartItem.map((item) => (
                                <Stack direction='row' spacing={3} key={item.id} sx={{ alignItems: 'center', my: 2 }} >
                                    <Box sx={{ width: "40%" }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            sx={{ width: "70%" }}
                                            image={item.image[0]}
                                            alt={item.title}
                                        />
                                    </Box>
                                    <Box sx={{ width: '40%' }}>
                                        <Typography>{item.title}</Typography>
                                        <Typography>{item.category}</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', textAlign: 'end', pr: 4 }}>
                                        <Typography sx={{ color: "#ff5252" }}>{Math.round(item.price) * item.quantity}</Typography>
                                    </Box>
                                </Stack>
                            ))
                        }
                        <Stack direction='row' sx={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
                            <Paper elevation={3} sx={{ width: '100%', py: 2, px: 5 }}>
                                <Typography sx={{ fontWeight: 600, fontSize: 23, pl: 3, textAlign: 'end', color: "#ff5252" }}>Total : {cartItem.reduce((total, item) => total + (Math.round(item.price) * item.quantity), 0)} </Typography>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Checkout;