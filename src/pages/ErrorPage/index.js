/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from "react";
import SearchForm from "Components/SearchForm/Form";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { css, jsx } from '@emotion/core'

const pageErrorStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
`

/**

.btn {
    border: 1px solid transparent;
    padding: .5rem 1rem;
    background-color: var(--brand-color_3);
    color: var(--theme-body-txt);
    cursor: pointer;
    font-size: 1rem;
  }
  
  .btn:hover {
    background-color: var(--brand-color_6);
  }
  
  .page-error { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }
  
  .page-error .code-error {
    font-size: 5rem;
    font-weight: bold;
    font-style: italic;
  }
  
  .page-error .msg-error {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .page-error .gif-error {
    margin: 1rem auto;
    width: 250px;
    height: 250px;
  }
  
  .page-error a {
    text-decoration: none;
  } 
 */


const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div css = {pageErrorStyle}>
            <span className="code-error">404</span>
            <span className="msg-error">Sometimes gettings lost isn't that bad</span>
            <img className="gif-error" src={randomImage()} alt="alt-page-404"/>
            <Link href='/' className="btn">Go to home</Link>
        </div>
      </div>
    </>
  );
}
