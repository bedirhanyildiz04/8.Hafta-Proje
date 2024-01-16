import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import "./Background.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 2,
    name: "HP Laptop",
    price: 749,
    description:"HP Laptop AMD ryzen 512...",
    image: "https://www.hpstore.com.tr/hp-laptop-15-fc0016nt-amd-ryzen-5-7520u-8gb-ram-512gb-ssd-amd-radeon-graphics-156-inc-fhd-windows-11-home-siyah-7q9k8ea-14247-18-B.jpg",
  },
  {
    id: 19,
    name: "JBL 570BT Kulaklık",
    price: 99,
    description:"JBL Tune 570BT Bluetooth Kulak Üst...",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/142350-1_large.jpg",
  },
  {
    id: 25,
    name: "MAGNIFICA Kahve Makinesi",
    price: 849,
    description:"MAGNIFICA EVO Çekirdekten Fincana...",
    image: "https://shop.delonghi.com.tr/delonghi-magnifica-evo-ecam290-yeni-magnifica-evo-delonghi-1208-17-B.png",
  },
];

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Arama terimi:", searchInput);
  };

  const addToCart = (product) => {
    navigate('/shopping-cart'); 
    console.log("Sepete eklendi:", product);
  };

  const addToFavorites = (product) => {
    navigate('/favorites');
    console.log("Favorilere eklendi:", product);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="home-background">
        
      <div>
        <h1>Hoş Geldiniz!</h1>
        <form onSubmit={handleSearchSubmit} className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Ürün Arayın..."
            value={searchInput}
            onChange={handleSearchChange}
          />
          <button type="submit" className="btn btn-success btn-search">
            Ara
          </button>
        </form>
        <Container>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={4} className="mb-3">
                <Card className="Card">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="Card.Img"
                  />
                  <Card.Body className="Card.Body">
                    <Card.Title className="Card.Title">{product.name}</Card.Title>
                    <Card.Text className="Card.Text">
                      Fiyat: ${product.price}
                    </Card.Text>
                    <p className="Card.Description">
                    {product.description}</p>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="primary"
                        onClick={() => addToCart(product)}
                        className="Button"
                      >
                        <FontAwesomeIcon icon={faShoppingCart} /> Sepete Ekle
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => addToFavorites(product)}
                        className="Button"
                      >
                        <FontAwesomeIcon icon={faHeart} /> Favorilere Ekle
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="text-center mt-3">
          <Link to="/product">
            <button type="submit" className="btn btn-success">
              Tüm Ürünler
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
