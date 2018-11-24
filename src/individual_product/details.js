import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalEx from "./modal.js";
import Rating from "react-rating";

export default class Details extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h4>ABOUT THE PRODUCT</h4>
              <p>
                hdfddhdf fhjdbfjh bfjhbf jhjhsbfhjbf jhfhjf jhfkkf jhdfdfjhbf
                jhjbfjhbf jhdshbfjhbfjhdhfbjhbffkdkbf hdfddhdf fhjdbfjh bfjhbf
                jhjhsbfhjbf jhfhjf jhfkkf jhdfdfjhbf jhjbfjhbf
                jhdshbfjhbfjhdhfbjhbffkdkbf hdfddhdf fhjdbfjh bfjhbf jhjhsbfhjbf
                jhfhjf jhfkkf jhdfdfjhbf jhjbfjhbf jhdshbfjhbfjhdhfbjhbffkdkbf
                hdfddhdf fhjdbfjh bfjhbf jhjhsbfhjbf jhfhjf jhfkkf jhdfdfjhbf
                jhjbfjhbf jhdshbfjhbfjhdhfbjhbffkdkbf
              </p>
            </Col>
            <Col>
              <h4>Ratings and Reviews</h4>

              <Row>
                <Col xs="6">
                  <h5>
                    <Rating initialRating={4.3} readonly />
                  </h5>
                </Col>
                <Col xs="6">
                  <ModalEx buttonLabel="Give review" />
                </Col>
              </Row>
              <hr />
              <Rating />
              <div>
                <h6>heading</h6>
                <p>
                  fytfhf ghf ghfhfh hhhhhhhhhhh hhhhhhhd jhjghtdhm gytfgn gjfhgg
                  nbtfv bftyv nbgfhv jggb bvgfujv hgtfgb nvcftjgnb hytfgv gtgb
                  bfuyjhb yuhv tjyhgvb{" "}
                </p>
              </div>
              <div>
                <h6>heading</h6>
                <p>
                  fytfhf ghf ghfhfh hhhhhhhhhhh hhhhhhhd jhjghtdhm gytfgn gjfhgg
                  nbtfv bftyv nbgfhv jggb bvgfujv hgtfgb nvcftjgnb hytfgv gtgb
                  bfuyjhb yuhv tjyhgvb{" "}
                </p>
              </div>
              <div>
                <h6>heading</h6>
                <p>
                  fytfhf ghf ghfhfh hhhhhhhhhhh hhhhhhhd jhjghtdhm gytfgn gjfhgg
                  nbtfv bftyv nbgfhv jggb bvgfujv hgtfgb nvcftjgnb hytfgv gtgb
                  bfuyjhb yuhv tjyhgvb{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
