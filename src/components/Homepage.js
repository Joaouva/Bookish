// COMPONENTE COM DOIS CART\OES - 1 LIVRARIAS E 1 LIVROS
import react from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Homepage() {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              width={900}
              height={500}
              className="d-block w-100 slide-image"
              src="../../images/allbooks.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Our Books</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              width={900}
              height={500}
              className="d-block w-100"
<<<<<<< HEAD
              src="../../images/books.jpg"
=======
              src="../../images/libraries.jpg"
>>>>>>> 66084344b4759521ea32a1fc41f45bbe6a0d4ef1
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Our Bookshops</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
<<<<<<< HEAD
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../images/books.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
=======
>>>>>>> 66084344b4759521ea32a1fc41f45bbe6a0d4ef1
        </Carousel>
      </div>
      <div>
        <Container>
          <Row className="containerHomepage">
            <Col className="colHomepage">
              {" "}
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Libraries</Card.Title>
                  <Card.Text>
                    Search for all the libraries currently selling in our
                    website!
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
                    Search for all the books that are currently being sold in
                    our website!
                  </Card.Text>
                  <Card.Link href="/bookfeed">Click here</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;
