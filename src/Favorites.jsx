// Favorites.js
import React from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorilerim</h2>
      {favorites.length === 0 ? (
        <p>Favori ürününüz bulunmamaktadır.</p>
      ) : (
        <Container>
          <Row>
            {favorites.map((item) => (
              <Col key={item.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">Sepete Ekle</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Favorites;
