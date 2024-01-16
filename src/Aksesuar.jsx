import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";

const products = [
  {
    id: 19,
    name: "JBL 570BT Kulaklık",
    price: 99,
    description:"JBL Tune 570BT Bluetooth Kulak Üst...",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/142350-1_large.jpg",
  },
  {
    id: 20,
    name: "RAMPAGE Fan",
    price: 60,
    description:"RAMPAGE Notebook Soğutucu Led... ",
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/addison/thumb/114923_large.jpg",
  },
  {
    id: 21,
    name: "JBL Hoparlör",
    price: 59,
    description:"JBL Go Essential Bluetooth Hopa... ",    
    image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/136047-1_large.jpg",
  },
  {
    id: 22,
    name: "Mcdodo kablosuz şarj aleti",
    price: 260,
    description:"Mcdodo Manyetik tutuculu Şarj...",    
    image: "https://www.mcdodo.com.tr/images/urunler/mcdodo-ch-8720-15w-magsafe-manyetik-tutuculu-wireless-sarj-ip12-ip13-serisi-uzay-grisi-resim-417.jpg",
  },
  {
    id: 23,
    name: "Anker Powebank",
    price: 40,
    description:"Anker Powebank 10.000mah",    
    image: "https://anker-tr.com/cdn/shop/products/1223-01.png?v=1645186764",
  },
  {
    id: 24,
    name: "Apple watch Ultra 2",
    price: 399,
    description:"Xiaomi Redmi Watch Ultra 2...",    
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT613ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR_GEO_TR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507270905",
  },
];


function Aksesuar() {
  return (
    <Container>
      <h2>Aksesuarlar :</h2>
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

export default Aksesuar