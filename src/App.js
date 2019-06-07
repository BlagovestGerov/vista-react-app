import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default';
import Card from './components/Card';
import ProductList from './components/ProductList';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/card" component={Card} />
        <Route component={Default} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
