import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Feature from './components/Feature/feature';
import Filter from './components/Filter/filter';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Feature />
    </div>
  );
}

export default App;
