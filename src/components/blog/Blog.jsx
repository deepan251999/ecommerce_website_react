import React from 'react';
import { Box, Container, Stack, Grid, CardMedia, Typography } from '@mui/material';
import Image1 from '../../Assets/1.webp';
import Image2 from '../../Assets/4.webp';
import Image3 from '../../Assets/6.webp';
import Image4 from '../../Assets/7.webp';
import Image5 from '../../Assets/9.webp';
import Image6 from '../../Assets/10.webp';
import { Link } from 'react-router-dom';

function Blog() {

    const BlogCarts = [
        { id: 1, BlogImage: Image1, BlogDate: "July 28, 2023", Blogtitle: " Mens Urban Streetwear Fashion Brand Launched", BlogParagraph: "Fashion is not merely about clothing; it is an embodiment of elegance, sophistication, and self-expression." },
        { id: 2, BlogImage: Image2, BlogDate: "July 28, 2023", Blogtitle: "Kids Schoolwear Brand in UK to inherit Digitalization", BlogParagraph: "Technology has become an integral part of our lives, revolutionizing the way we work and communicate ourselves." },
        { id: 3, BlogImage: Image3, BlogDate: "July 28, 2023", Blogtitle: " The Future of Fashion Subscription Model", BlogParagraph: "Trends are patterns or shifts in behavior, preferences, or ideas that gain popularity within a specific industry or society." },
        { id: 4, BlogImage: Image4, BlogDate: "July 28, 2023", Blogtitle: " How to leverage AI to foster growth for your Fashion", BlogParagraph: "In a world where information is abundant and time is precious, our blog is your sanctuary of meaningful content." },
        { id: 5, BlogImage: Image5, BlogDate: "July 28, 2023", Blogtitle: " How we increased sales for an online Women Wear.", BlogParagraph: "Welcome to the ultimate shopping event that you've been waiting for Our upcoming shopping sale with big discount." },
        { id: 6, BlogImage: Image6, BlogDate: "July 28, 2023", Blogtitle: " Fashion Shopify Design Development for All Brand", BlogParagraph: "Welcome to the digital world, where technology is constantly evolving and shaping the way we live, work, and communicate." }
    ];

    return (
        <>
            <Box sx={{ bgcolor: '#faf5f5', position: 'sticky', top: 88, zIndex: 998 }}>
                <Container maxWidth="xl">
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center', py: 3, mb: 2 }}>
                        <Typography sx={{ fontSize: 30, fontWeight: 500 }}>Blog</Typography>
                        <Typography>
                            <Link to='/home' style={{ textDecoration: 'none', color: '#030202' }}> Home / </Link>
                            Blog
                        </Typography>
                    </Stack>
                </Container>
            </Box>
            <Container maxWidth="xl">
                <Grid container spacing={3} my={5} >
                    {
                        BlogCarts.map((item) => (
                            <Grid item key={item.id} xs={12} sm={6} md={4}>
                                <Box sx={{ borderRadius: "8px", overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        image={item.BlogImage}
                                        alt={item.Blogtitle}
                                        sx={{ cursor: 'pointer', ":hover": { transform: "scale(1.1)", transition: 'all .2s ease-in-out' } }}
                                    />
                                </Box>
                                <Typography sx={{ pt: 1, fontSize: 18, fontWeight: 500, color: '#ff5252' }}>{item.BlogDate}</Typography>
                                <Typography sx={{ py: 1, fontSize: 16, fontWeight: 500 }}>{item.Blogtitle}</Typography>
                                <Typography sx={{ pb: 1, color: '#777', lineHeight: 1.4 }}>{item.BlogParagraph}</Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Blog;