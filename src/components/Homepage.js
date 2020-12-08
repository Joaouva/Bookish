// COMPONENTE COM DOIS CART\OES - 1 LIVRARIAS E 1 LIVROS
import react from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Homepage() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Libraries</Card.Title>
                <Card.Text>
                  Search for all the libraries currently selling in our website!
                </Card.Text>
                <Card.Link href="/userfeed">Click here</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Books</Card.Title>
                <Card.Text>
                  Search for all the books that are currently being sold in our
                  website!
                </Card.Text>
                <Card.Link href="/bookfeed">Click here</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
