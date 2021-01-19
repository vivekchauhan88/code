import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>  
  <div className="app">
  <div className="flex-wrapper">  
  <Navigation />
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route component={Error}/>
  </Switch>
  <Footer />
  </div>
	</div>
  </BrowserRouter>
  );
}
export default App;
