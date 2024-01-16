import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";

const products = [
  {
    id: 13,
    name: "VESTEL Andoid TV",
    price: 300,
    description:"VESTEL 50Q9700TT 50inc 126 cm 4K UHD...",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/vestel/thumb/140628-1_large.jpg",
  },
  {
    id: 14,
    name: "TCL Andoid Smart TV",
    price: 749,
    description:"TCL 65C645 65 inç 4K UHD Google Smart...",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/tcl/thumb/140119-1_large.jpg",
  },
  {
    id: 15,
    name: "Profilo Smart TV",
    price: 499,
    description:"Profilo 55OA515EG 55 140 Ekran 4K UHD... ",    
    image: "https://cdn.cimri.io/pictures/article/original/45/45772.jpg",
  },
  {
    id: 16,
    name: "Hi-Level Smart TV",
    price: 260,
    description:"Hi-Level 55UL700 55'' Ultra HD Sma...",    
    image: "https://akn-ayb.a-cdn.akinoncdn.com/products/2023/12/20/475802/82fbd87e-1688-4782-aa51-cd8f4bafae0a_size780x780_quality60_cropCenter.jpg",
  },
  {
    id: 17,
    name: "LG Smart TV",
    price: 399,
    description:"LG 50UR91006 50inc 127 cm 4K webOS...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/lg/thumb/138965-1-1_large.jpg",
  },
  {
    id: 18,
    name: "Philips Smart TV",
    price: 400,
    description:"Philips Ambilight TV The One 55PUS85...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/philips/thumb/140100-1_large.jpg",
  },
]

const TV = () => {
  return (
      <Container>
        <h2>Bilgisayar Kategorisi</h2>
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
  

 

export default TV;
