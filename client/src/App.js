import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Nav";
import Home from './pages/Home'
import Selection from "./pages/Selection";
import Footer from "./components/Footer";
import Error from "./components/NoMatch";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/products' component={Selection} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
 
export default App;
