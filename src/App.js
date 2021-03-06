import React, { Suspense } from 'react';
import 'App.css';

import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ErrorPage from 'pages/ErrorPage'

import { GifsContextProvider } from 'context/GifsContext';
import { UserContextProvider } from 'context/UserContext';

import { Route, Link, Switch } from "wouter";
import Header from 'Components/Header';


const Home = React.lazy(
  () => import("pages/Home")
)

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to='/'>
              <h1>App Home</h1>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route component={Home} path='/' />
                <Route path="/search/:keyword/:rating?/:language?" component={SearchResults} />
                <Route path="/gif/:id" component={Detail} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route
                  path='/:rest*'
                  component={ErrorPage}
                />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
