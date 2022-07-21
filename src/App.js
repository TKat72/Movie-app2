import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
<div className="container"></div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
