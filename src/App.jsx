import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import Favorites from './Favorites';
import Product from './Product';
import Aksesuar from './Aksesuar';
import Bilgisayar from './Bilgisayar';
import EvAletleri from './EvAletleri';
import TV from './TV';
import CepTelefonu from './CepTelefonu';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]); 

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shopping-cart"
          element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route
          path="/product"
          element={<Product addToCart={addToCart} addToFavorites={addToFavorites} />}
        />
        <Route path="/aksesuar" element={<Aksesuar />} />
        <Route path="/bilgisayar" element={<Bilgisayar />} />
        <Route path="/EvAletleri" element={<EvAletleri />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/CepTelefonu" element={<CepTelefonu />} />
      </Routes>
    </div>
  );
}

export default App;

