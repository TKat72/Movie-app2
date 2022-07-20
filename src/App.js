import React from 'react';
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header'
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/" component={Home}></Route>
        <Route path="/movie/:imdbID" component={MovieDetail}></Route>
        <Route component={PageNotFound} ></Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
