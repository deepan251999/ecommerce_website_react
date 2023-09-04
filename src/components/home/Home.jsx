import React from 'react';
import { Grid, Container, styled, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeImage1 from '../../Assets/main-banner-1.webp';
import HomeImage2 from '../../Assets/sub-banner-5.webp';
import HomeImage3 from '../../Assets/9.webp';

function Home() {

    const stylehomepage = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: '8px'
    };

    const styleButtons = {
        bgcolor: '#ff5252',
        px: 4,
        py: 1,
        mt: 3,
        ":hover": { bgcolor: "#ff5252", color: "#fff" }
    };

    const HomeBackgroundImage = styled('div')({

    });

    return (
        <>
            <Container maxWidth='xl' sx={{ bgcolor: '#faf5f5' }}>
                <Grid container sx={{ justifyContent: 'center', pt: 8, pb: 7 }}>
                    <Grid item xs={12} md={8} my={2} mx={3}>
                        <HomeBackgroundImage sx={stylehomepage} style={{ height: "500px", backgroundImage: `url(${HomeImage1})` }}>
                            <Grid container sx={{ alignItems: 'center', justifyContent: 'end', pr: 6, height: 500 }}>
                                <Grid item>
                                    <Typography sx={{ fontSize: 23 }}>Big Saving Days Sale</Typography>
                                    <Typography sx={{ fontSize: 32, fontWeight: 600, pt: 3 }}>Women Solid Round </Typography>
                                    <Typography sx={{ fontSize: 32, fontWeight: 600 }}>Green T-Shirt</Typography>
                                    <Typography sx={{ fontSize: 23, pt: 2 }}>Starting New Offer </Typography>
                                    <Link to={'/catalog'} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={styleButtons}>Shop Now</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </HomeBackgroundImage>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ my: 2 }}>
                        <Grid item xs={12}>
                            <HomeBackgroundImage sx={stylehomepage} style={{ height: "230px", backgroundImage: `url(${HomeImage2})` }}>
                                <Grid container sx={{ alignItems: 'center', justifyContent: 'end', pr: 4, height: 230 }}>
                                    <Grid item >
                                        <Typography sx={{ fontSize: 20 }}> Samsung Gear </Typography>
                                        <Typography sx={{ fontSize: 20 }}>VR Electronics </Typography>
                                        <Typography sx={{ color: 'red', fontSize: 26, fontWeight: 600, py: 3 }}> $129.00</Typography>
                                        <Link to={"/electronics"}>
                                            <Button variant="contained" sx={styleButtons}>Shop Now</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </HomeBackgroundImage>
                        </Grid>
                        <Grid item sm={12} mt={4}>
                            <HomeBackgroundImage sx={stylehomepage} style={{ height: "230px", backgroundImage: `url(${HomeImage3})` }}>
                                <Grid container sx={{ alignItems: 'center', justifyContent: 'start', pl: 4, height: 230 }}>
                                    <Grid item >
                                        <Typography sx={{ fontSize: 20 }}> Samsung Gear </Typography>
                                        <Typography sx={{ fontSize: 20 }}>VR Camera </Typography>
                                        <Typography sx={{ color: '#ff5252', fontSize: 26, fontWeight: 600, py: 3 }}> $129.00</Typography>
                                        <Link to={"/mensclothing"}>
                                            <Button variant="contained" sx={styleButtons}>Shop Now</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </HomeBackgroundImage>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home;