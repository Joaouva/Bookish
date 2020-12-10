// COMPONENTE COM DOIS CART\OES - 1 LIVRARIAS E 1 LIVROS
import react from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
              src="../../images/allbooks.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Our Books</h1>
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
              <h1>Our Bookshops</h1>
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
      <footer id="footer">
        <div>
          {" "}
          <h3> Our Sales</h3>
          <img style={{height:"100px"}} src="../../images/sale.png" />
        </div>
        <div>
          <form>
            <h3>Newsletter</h3>
            <p> Insert your email to subscribe</p>
            <input type="email" placeholder="enter email" />
          </form>
        </div>
        <div>
          <h3>Contact us</h3>
          <p> info@bookish.com</p>
          <img style={{ width: "140px" }} src="../../images/media.png" />
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
