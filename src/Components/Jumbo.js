import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {Link} from "react-router-dom";

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">My Receipts</h1>
          <p className="lead">This is your personal dashboard. Here you will find your uploaded receipts, <Link to="/upload">upload new receipts</Link> or search through all of your documents</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;