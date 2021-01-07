import poster from '../images/poster.png';
import cool from '../images/cool.jpeg';
import matrix from '../images/matrix.png';
import globe from '../images/globe.jpg';
import wise from '../images/wise.png';
import bahi from '../images/bahi.jpg';
import naija from '../images/naija.png';
import quezx from '../images/quezx.jpeg';
import make from '../images/make.jpg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Image, Button} from 'react-bootstrap';

function Home() {
  return (
  <div className="app">
  <Container fluid><Row><Col>
		<Image src={poster} className="app-poster" alt="poster" />
		</Col>
		<Col>
		<div className="fast">
		Fast Paced
		</div>
		<div className="startup">
		Startup Engineering
		</div>
		<div className="virtual">
		Virtual CTO for Entrepreneurs.
		</div>
		<div className="butto">
		<a href="/about"><Button variant="dark">Know More</Button></a>
		</div>
		</Col></Row></Container>
    <br /><br />
    <div className="ideas">
    <Container fluid><Row>
    <Col>
    <div className="insights">
    <h4>Ideas & Insights</h4>
    </div>
    <div className="butto1">
    <a href="/insights"><Button variant="light" size="sm">View All</Button></a>
    </div>
    </Col></Row><Row>
    <Col><Image src={cool} className="app-cool" alt="cool" rounded/>
    <br />Sticking to your businessplan in a noisy world ?<br />
    <Button variant="outline-light" size="sm">Read More</Button>
    </Col>
    <Col><Image src={matrix} className="app-matrix" alt="matrix" rounded/>
    <br />How to pick a technical co-founder/partner ?<br />
    <Button variant="outline-light" size="sm">Read More</Button>
    </Col></Row>
    <Row><Col>
    <Image src={globe} className="app-globe" alt="globe" rounded/>
    <br />Where to incorporate your business ?<br />
    <Button variant="outline-light" size="sm">Read More</Button>
    <br /><br />
    </Col></Row>
    </Container>
    </div>
    <br /><br />

    <div className="work">
    <Container fluid><Row>
    <Col>
    <div className="featured">
    <h1>Featured Work</h1>
    </div>
    <div className="butto2">
    <a href="/casestudies"><Button variant="dark" size="sm">View All</Button></a>
    </div>
    </Col></Row><Row>
    <Col><Image src={wise} className="app-wise" alt="wise" rounded/>
    <br />WisePilgrim - Offline Travel Companion<br />
    </Col>
    <Col><Image src={bahi} className="app-bahi" alt="bahi" rounded/>
    <br />Bahi Khata - Accounting is the language of Business<br />
    </Col></Row>
    <Row>
    <Col><Image src={naija} className="app-naija" alt="naija" rounded/>
    <br />Naijamee - Virtual World for Kids<br />
    </Col>
    <Col><Image src={quezx} className="app-quezx" alt="quezx" rounded/>
    <br />QuezX - Read curated news in 15 sec<br />
    </Col></Row>
    <Row><Col>
    <Image src={make} className="app-make" alt="make" rounded/>
    <br />Makerazza - A Multiplayer Trivia Game<br />
    <br /><br />
    </Col></Row>
    </Container>
    </div>

    </div>
  );
}
export default Home;
