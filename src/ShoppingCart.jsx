import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const ShoppingCart = ({ cartItems, removeFromCart, addToCart }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <h2 className="mb-4">Sepetiniz</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col key={item.id} md={4} className="mb-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title className="product-name">
                      {item.name}
                    </Card.Title>
                    <Card.Text className="product-price">
                      Fiyat: ${item.price}
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item)}
                      className="product-button"
                    >
                      <FontAwesomeIcon icon={faTrash} /> Sepetten Çıkar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col>
              <p>Toplam Fiyat: ${calculateTotalPrice()}</p>
              <Button
                variant="primary"
                className="mr-2"
                onClick={() => alert("Ödeme işlemi tamamlandı.")}
              >
                Ödeme Yap
              </Button>
              <Button
                variant="secondary"
                onClick={() => alert("Sepetiniz boşaltıldı.")}
              >
                Sepeti Boşalt
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;
