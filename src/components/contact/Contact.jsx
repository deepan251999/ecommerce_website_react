import React from 'react';
import { Stack, Grid, Box, Container, TextField, Button ,Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';

function Contact() {

    return (
        <React.Fragment>
            <Box sx={{ bgcolor: '#faf5f5', position: 'sticky', top: 88, zIndex: 998 }}>
                <Container maxWidth="xl">
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center', py: 3, mb: 2 }}>
                        <Typography sx={{ fontSize: 36, fontWeight: 500 }}>Contact</Typography>
                        <Typography>
                            <Link to='/home' style={{ textDecoration: 'none', color: '#030202' }}>Home / </Link>
                            Contact
                        </Typography>
                    </Stack>
                </Container>
            </Box>
            <Container maxWidth="xl">
                <Grid container spacing={3} my={5}>
                    <Grid item md={7}>
                        <Box sx={{ p: 5, border: '1px solid #E5E5E5' }}>
                            <Typography sx={{ fontSize: 21, fontWeight: 600 }}>Do You Have Any Questions?</Typography>
                            <Grid container spacing={2} py={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="Contact_name" label="Name" variant="outlined" style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="Contact_email" label="Email" variant="outlined" type='email' style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="Contact_phone" label="Phone" variant="outlined" type='tel' style={{ width: "100%" }} />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField id="Contact_comment" label="Comment" variant="outlined" style={{ width: "100%" }} inputProps={{ style: { height: "70px" } }} />
                                </Grid>
                            </Grid>
                            <Button variant="contained" sx={{ bgcolor: '#ff5252', px: 4, py: 1, ":hover": { bgcolor: "#ff5252", color: "#fff" } }}>SEND</Button>
                        </Box>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Box sx={{ px: 5, py: 3, border: '1px solid #E5E5E5' }} >
                            <Typography sx={{ fontSize: 22, fontWeight: 600, letterSpacing: 1, pb: 1 }}>Get in touch with us</Typography>
                            <Stack direction='row' spacing={2} sx={{ alignItems: 'center', py: 1 }}>
                                <Box>
                                    <HomeIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 17, fontWeight: 600, pb: 1 }}>Address:</Typography>
                                    <Typography sx={{ fontSize: 15, pb: 1 }}>CA, USA 94105</Typography>
                                    <Typography sx={{ fontSize: 15, pb: 1 }}>33 New Montgomery St.</Typography>
                                    <Typography sx={{ fontSize: 15, pb: 1 }}>Ste 750 San Francisco,</Typography>
                                </Box>
                            </Stack>
                            <Stack direction='row' spacing={2} sx={{ alignItems: 'center', py: 1 }}>
                                <Box>
                                    <LocalPhoneIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 17, fontWeight: 600, pb: 1 }}>Contact No.:</Typography>
                                    <Typography sx={{ fontSize: 15, pb: 1 }}>(+91)7-723-4608</Typography>
                                </Box>
                            </Stack>
                            <Stack direction='row' spacing={2} sx={{ alignItems: 'center', py: 1 }}>
                                <Box>
                                    <MailIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 17, fontWeight: 600, pb: 1 }}>Email:</Typography>
                                    <Typography sx={{ fontSize: 15, pb: 1 }}>classyshop@exampledemo.com</Typography>
                                </Box>
                            </Stack>
                            <Stack direction='row' spacing={2} sx={{ alignItems: 'center', py: 1 }}>
                                <Box>
                                    <LocalGroceryStoreIcon />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: 17, fontWeight: 600, pb: 1 }}>Store Info:</Typography>
                                    <Typography sx={{ fontSize: 15, pb: 1 }}>Monday – Friday 10AM - 8PM</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Contact;