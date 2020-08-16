import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

import { GifsContextProvider } from './context/GifsContext';

import { Route, Link } from "wouter";



function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <h1>App Home</h1>
        </Link>
        <GifsContextProvider>
          <Route component={Home} path='/' />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
