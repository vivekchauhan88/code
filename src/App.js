//import logo from './logo.svg';
import logo from './images/logo.png';
import poster from './images/poster.png';
import cool from './images/cool.jpeg';
import matrix from './images/matrix.png';
import globe from './images/globe.jpg';
import wise from './images/wise.png';
import bahi from './images/bahi.jpg';
import naija from './images/naija.png';
import quezx from './images/quezx.jpeg';
import make from './images/make.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Nav, Image, Button} from 'react-bootstrap';

function App() {
  return (
  <div className="app">
  <div className="nav">
  <Container fluid><Row>
  <Col>
		<Image src={logo} className="app-logo" alt="logo" rounded />
		<p className="text1">
		Ninja Monk Labs
		</p>

	<Nav className="navr" activeKey="/">
		<Nav.Item>
			<Nav.Link href="/">HOME</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href="/about/">ABOUT</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href="/opensource/">OPEN SOURCE</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href="/solutions/">SOLUTIONS</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href="/insights/">BLOG</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href="/contact/">CONTACT</Nav.Link>
		</Nav.Item>
	</Nav>
  </Col>
  </Row></Container>
	</div>
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
    <div className="foot">
    <h6><a href="/">Ninja Monk Labs</a> © 2020</h6>
    </div>

    </div>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="success">Ok</Button>
      </header>
    </div>
  );
}
*/
export default App;
