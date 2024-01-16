import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Apple Macbook",
    price: 999,
    description:"Macbook Air 8Gb Ram 512ssd...",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/1-32_large.jpg",
  },
  {
    id: 2,
    name: "HP Laptop",
    price: 749,
    description:"HP Laptop AMD ryzen 512...",
    image: "https://www.hpstore.com.tr/hp-laptop-15-fc0016nt-amd-ryzen-5-7520u-8gb-ram-512gb-ssd-amd-radeon-graphics-156-inc-fhd-windows-11-home-siyah-7q9k8ea-14247-18-B.jpg",
  },
  {
    id: 3,
    name: "Huawei Matebook",
    price: 560,
    description:"Huawei Matebook D16 12.Nesil Core i5...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/137712-1_large.jpg",
  },
  {
    id: 4,
    name: "Casper Nirvana",
    price: 300,
    description:"Casper Nirvana C550 12.Nesil Core i5 1235U...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/casper/thumb/140013-7-1_large.jpg",
  },
  {
    id: 5,
    name: "MSI Thın GF63 Notebook",
    price: 899,
    description:"Msi Thin Gf63 12.Nesil Core i5 12450...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/msi/thumb/140612-1_large.jpg",
  },
  {
    id: 6,
    name: "Asus Tuf Gaming Notebook",
    price: 999,
    description:"Asus Tuf Gaming A15 7.Nesil Ryzen...",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/139098-1_large.jpg",
  },


];


const Bilgisayar = () => {
    return (
      <Container>
        <h2>Bilgisayarlar :</h2>
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
  


export default Bilgisayar;
