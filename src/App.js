import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import Collection from './components/collections/Collection';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ShoppingCart from './components/shoppingcart/ShoppingCart';
import Favourite from './components/favourite/Favourite';
import Checkout from './components/checkout/Checkout';
import Electronics from './components/electronics/Electronics';
import MensClothing from './components/mensclothing/MensClothing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    let productUrl = "https://fakestoreapi.com/products";
    let collectionUrl = "https://dummyjson.com/products";

    const [productData, setProductData] = useState([]);
    const [productDataUrl, setProductDataUrl] = useState(productUrl);
    const [cartItem, setCartItem] = useState([]);
    const [collectionData, setCollectionData] = useState([]);
    const [favouriteCartItem, setFavouriteCartItem] = useState([]);
    const [checkoutData, setCheckoutData] = useState([]);

    useEffect(() => {
      axios.get(collectionUrl)
        .then(response => setCollectionData(response.data.products));
    }, [collectionUrl]
    );

    const idUpdatedCollectionData = collectionData.map((item, index) => (
      { ...item, image: item.images, id: index > -1 ? index + 21 : item.id }
    ));

    useEffect(() => {
      axios.get(productDataUrl)
        .then(response => setProductData(response.data));
    }, [productDataUrl]
    );

    const imageArrayUpdatedProductData = productData.map((item) => (
      { ...item, image: [item.image] }
    ));

    return (
      <div>
        <Router>
          <Navbar
            cartItem={cartItem}
            favouriteCartItem={favouriteCartItem}
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/catalog'
              element={
                <Catalog
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  favouriteCartItem={favouriteCartItem}
                  setFavouriteCartItem={setFavouriteCartItem}
                  setProductDataUrl={setProductDataUrl}
                  imageArrayUpdatedProductData={imageArrayUpdatedProductData}
                />
              }
            />
            <Route
              path='/collection'
              element={
                <Collection
                  setCartItem={setCartItem}
                  cartItem={cartItem}
                  setFavouriteCartItem={setFavouriteCartItem}
                  favouriteCartItem={favouriteCartItem}
                  idUpdatedCollectionData={idUpdatedCollectionData}
                />
              }
            />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route
              path='/shoppingcart'
              element={
                <ShoppingCart
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  setCheckoutData={setCheckoutData}
                  checkoutData={checkoutData}
                />
              }
            />
            <Route
              path='/favourite'
              element={
                <Favourite
                  favouriteCartItem={favouriteCartItem}
                  setFavouriteCartItem={setFavouriteCartItem}
                  setCartItem={setCartItem}
                  cartItem={cartItem}
                />
              }
            />
            <Route 
              path='/checkout' 
              element={
                <Checkout
                  cartItem={cartItem}
                />
             }
            />
            <Route 
              path='/electronics' 
              element={
                <Electronics
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  favouriteCartItem={favouriteCartItem}
                  setFavouriteCartItem={setFavouriteCartItem}
                />
            }
            />
            <Route 
              path='/mensclothing' 
              element={
                <MensClothing
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  favouriteCartItem={favouriteCartItem}
                  setFavouriteCartItem={setFavouriteCartItem}
                />
            }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
}

export default App;
