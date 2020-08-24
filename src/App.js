import React, {Suspense} from 'react';
import 'App.css';

import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';

import { GifsContextProvider } from 'context/GifsContext';

import { Route, Link } from "wouter";

const Home = React.lazy(
  () => import("pages/Home")
)

function App() {

  return (
    <div className="App">
      <Suspense fallback = {null}>
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
      </Suspense>
    </div>
  );
}

export default App;
