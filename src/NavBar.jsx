import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const cartItems = [];

  const handleToggle = () => setShow(!show);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="https://media.istockphoto.com/id/1211866223/tr/vekt%C3%B6r/online-pazar-yeri-tasar%C4%B1m-online-al%C4%B1%C5%9Fveri%C5%9F-vekt%C3%B6r-tasar%C4%B1m%C4%B1-elektronik-ticaret-ill%C3%BCstrasyon.jpg?s=612x612&w=0&k=20&c=sHzhrqpctbWsuAgor44SFR1oJfLymkt4Y7QQRlxbcSg="
            width="140"
            height="82"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Dropdown show={show} onToggle={handleToggle}>
              <Dropdown.Toggle id="dropdown-basic">Tüm Kategoriler</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/Bilgisayar">
                  Bilgisayar
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/TV">
                  TV
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/CepTelefonu">
                  Cep Telefonu
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Aksesuar">
                  Aksesuar
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/EvAletleri">
                  Ev Aletleri
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} to="/">
              Anasayfa
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              Ürünler
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favoriler
            </Nav.Link>
            <Nav.Link href="/shopping-cart">
        Sepetim ({cartItems.length})
      </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
