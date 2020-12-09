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
      <div style={{ marginTop: "-2%" }}>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              width={300}
              height={400}
              className="d-block w-100 slide-image"
              src="../../images/allbooks.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Our Books</h3>
              <p>
                Search for all the books that are currently being sold in our
                website!
              </p>
              <a className="links" href="/bookfeed">
                Click here
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              width={300}
              height={400}
              className="d-block w-100"
              src="../../images/libraries.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Our Bookshops</h3>
              <p>
                Search for all the libraries currently selling in our website!
              </p>
              <a className="links" href="/userfeed">
                Click here
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div></div>
    </div>
  );
}

export default Homepage;
