import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./grid.css";

const ProductList = ({ products, handleAddToCartClick }) => (
  <Row>
    {products.map((product, index) => {
      return (
        <Col className="pic" xs="12" sm="4" key={index}>
          <Link to="/individual">
            <img src={product.url} className="pic" />
          </Link>
          <h3>{product.title}</h3>
          <div className="txt1">5454</div>
          <hr />
          <Button
            color="primary"
            className="txt2"
            style={{ marginBottom: 30, textAlign: "center" }}
            onClick={() => {
              handleAddToCartClick(product);
            }}
          >
            ADD TO CART
          </Button>
        </Col>
      );
    })}
  </Row>
);

export { ProductList };
