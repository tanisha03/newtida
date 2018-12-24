import React from "react";
import { Link } from "react-router-dom";

import { Jumbotron, Button } from "reactstrap";

const Jumbo = props => {
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <Jumbotron>
        <h1 className="lead1">BLOG</h1>
        <p className="lead">
          ddfgdf dfgdsg dfdfgdfgf ffgsfg fgfsdfg dfdfgsg gsg sfgsg sffgsgsg
          rgsffg sfsfg fg
        </p>
        <hr className="line" />
        <p className="lead">
          ddfgdf dfgdsg dfdfgdfgf ffgsfg fgfsdfg dfdfgsg gsg sfgsg sffgsgsg
          rgsffg sfsfg fg
        </p>
        <p className="lead">
          <Link to="/">
            <Button color="primary">Explore</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
