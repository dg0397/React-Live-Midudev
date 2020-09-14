/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from "react";
import SearchForm from "Components/SearchForm/Form";
import { Helmet } from "react-helmet";
import { css, jsx } from '@emotion/core'
import Button from "Components/Button";


const MARGIN = '1rem auto';
const SIZE = "250px";

const pageErrorStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  textAlign: 'center'
});

const codeErrorStyles = css({
  fontSize: "5rem",
  fontWeight: "bold",
  fontStyle: "italic"
});

const msgErrorStyles = css({
  fontSize: "1.5rem",
  margin: MARGIN
})

const gifErrorStyles = css({
  margin: MARGIN,
  width: SIZE,
  height: SIZE,
  transition : "all .8s ease",
  "&:hover":{
    transform : "scale(1.1)"
  }
})


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
        <div css = {pageErrorStyles}>
            <span css = {codeErrorStyles} >404</span>
            <span css = {msgErrorStyles} >Sometimes gettings lost isn't that bad</span>
            <img css = {gifErrorStyles}  src={randomImage()} alt="alt-page-404"/>
            <Button href = '/'>Go back home</Button>
        </div>
      </div>
    </>
  );
}
