import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ProductList } from './Pages/ProductList';
import { ProductDetail } from './Pages/ProductDetail';
import { Searchbar } from './components/SearchBar';

function App() {
  return (
    <Router>
      <Searchbar />
      <Routes>
        <Route caseSensitive path='/' element={<Home />}></Route>
        <Route path='/items' element={<ProductList />} />
        <Route path='/items/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
