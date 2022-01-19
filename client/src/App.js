import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Nav";
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Registration from './components/Login';
import Admin from './components/Admin';
import Selection from "./pages/Selection";
import Footer from "./components/Footer";
import Error from "./components/NoMatch";
import Cart from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import OrderSummary from "./components/OrderSummary";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/products' component={Selection} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/orderhistory' component={OrderHistory} />
          <Route exact path='/ordersummary' component={OrderSummary} />
          <Route exact path='/registration' component={Registration} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
