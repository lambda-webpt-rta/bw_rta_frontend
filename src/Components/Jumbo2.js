import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {Link} from "react-router-dom";

const Jumbo2 = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Upload Receipts</h1>
          <p className="lead">Here you will securely upload receipts. Finished uploading? See all of your receipts in one place on your <Link to="/dashboard">User Dashboard</Link> </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo2;