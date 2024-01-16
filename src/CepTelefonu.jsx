import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";

const products =[
  {
    id: 7,
    name: "Samsung Galaxy S23 Fe",
    price: 699,
    description:"Samsung Galaxy S23 FE 5g 8/256 Gb Akıllı...",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/141900-1_large.jpg",
  },
  {
    id: 8,
    name: "iPhone 11",
    price: 749,
    description:"iPhone 11 128 Gb Akıllı Telefon Beyaz",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/0004-layer-1_large.jpg",
  },
  {
    id: 9,
    name: "Samsung Galaxy A54 ",
    price: 560,
    description:"Samsung Galaxy A54 8/256 Gb Akıllı Telefon...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/0000-layer-3_large.jpg",
  },
  {
    id: 10,
    name: "VİVO Y35",
    price: 300,
    description:"Vivo Y35 8/256 Gb Akıllı Telefon Gün...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vivo/thumb/136183-1_large.jpg",
  },
  {
    id: 11,
    name: "Realme C53",
    price: 299,
    description:"Realme C53 4GB+128 GB Siyah",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/realme/thumb/140224-1-1_large.jpg",
  },
  {
    id: 12,
    name: "iPhone 15",
    price: 999,
    description:"iPhone 15 256 Gb Akıllı Telefon Siyah",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/140315-1-2_large.jpg",
  },

]

const CepTelefonu = () => {
  return (
    <Container>
      <h2>Cep Telefonu Kategorisi :</h2>
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
};

export default CepTelefonu;
