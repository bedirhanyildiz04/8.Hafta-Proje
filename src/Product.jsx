import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ addToCart, addToFavorites }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    console.log("Arama terimi:", searchInput);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Arama terimi:", searchInput);
  };

  const addToCartHandler = (product) => {
    addToCart(product);
    navigate("/shopping-cart");
  };

  const addToFavoritesHandler = (product) => {
    addToFavorites(product);
    navigate("/favorites");
  };

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
  ]

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const shuffledProducts = shuffleArray([...filteredProducts]);

  return (
    <Container className="product-container">
      <Row>
        <Col md={12} className="search-col">
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
        </Col>
      </Row>
      <Row>
        {shuffledProducts.map((product) => (
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
                    onClick={() => addToCartHandler(product)}
                    className="Button"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} /> Sepete Ekle
                  </Button>
                  <Button
                    variant="outline-secondary"
                    onClick={() => addToFavoritesHandler(product)}
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

export default Product;
