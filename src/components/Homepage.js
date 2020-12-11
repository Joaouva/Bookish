// COMPONENTE COM DOIS CART\OES - 1 LIVRARIAS E 1 LIVROS
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
							src="../../images/allbooks.png"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h1>Our Books</h1>
							<p>
								Search for all the books that are currently
								being sold in our website!
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
								Search for all the libraries currently selling
								in our website!
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
					<form>
						<h4>Subscribe our Newsletter</h4>
						<input
							type="email"
							placeholder="enter your email"
							style={{
								border: "5px solid rgb(70, 69, 69)",
								borderRadius: "20px",
								outline: "none",
								width: "20vw",
								color: "black",
								textAlign: "center",
							}}
						/>
					</form>
				</div>
				<div>
					<img
						src="../../images/socialmedia.png"
						alt="socialmedia"
						style={{ width: "10rem", height: "3.5rem" }}
					/>
				</div>
				<p style={{ fontSize: "14px" }}>
					© 2020 Copyright Bookish <br></br> info@bookish.com
				</p>
			</footer>
		</div>
  );
}

export default Homepage;
