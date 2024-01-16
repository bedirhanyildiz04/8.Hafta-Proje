import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";

const products = [
  {
    id: 25,
    name: "MAGNIFICA Kahve Makinesi",
    price: 849,
    description:"MAGNIFICA EVO Çekirdekten Fincana...",
    image: "https://shop.delonghi.com.tr/delonghi-magnifica-evo-ecam290-yeni-magnifica-evo-delonghi-1208-17-B.png",
  },
  {
    id: 26,
    name: "RCV 3 Robot Süpürge",
    price: 199,
    description:"RCV 3 Akıllı Robot Süpürge...",
    image: "https://s1.kaercher-media.com/mam/12696200/mainproduct/205903/d0.jpg",
  },
  {
    id: 27,
    name: "Fakir Airfryer",
    price: 80,
    description:"Easy Chefry Sıcak Hava Fritözü / Airfryer",    
    image: "https://www.fakir.com.tr/easy-chefry-sicak-hava-fritozu-airfryer-fakir-5867-41-B.png",
  },
  {
    id: 28,
    name: "SAMSUNG 23L Mikrodalga Fırın",
    price: 260,
    description:"Samsung MS23F300EEW 23 L Mikroda...",    
    image: "https://cdn.cimri.io/image/860x860/samsung-ms23f300eew-23-l-mikrodalga-firin_420942047.jpg",
  },
  {
    id: 29,
    name: "Arzum Blender",
    price: 69,
    description:"AR1138-O Minimix El Blender Seti",    
    image: "https://witcdn.arzum.com.tr/ar1138-o-minimix-el-blender-seti-okyanus-cubuk-blender-arzum-ar1138-o-4955-32-B.jpg",
  },
  {
    id: 30,
    name: "PHILIPS Ekmek Kızartma Makinesi",
    price: 399,
    description:"PHILIPS HD2581/90 DAILY COLLECTION EK...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/v2-86226_large.jpg",
  },
];

function EvAletleri() {
  return (
  <Container>
      <h2>Ev Aletleri :</h2>
      <Row>
        {products.map((product) => (
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
                <p className="Card.Description">{product.description}</p>
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
  );
}

export default EvAletleri