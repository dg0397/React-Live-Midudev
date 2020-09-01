import React from 'react'

import Spinner from 'Components/Spinner/index';
import GifsList from 'Components/GifsList/GifsList';

import TrendingSearches from 'Components/TrendingSearches/index';
import Category from 'Components/Category/Category';

import useGifs from 'hooks/useGifs';
import Form from 'Components/SearchForm/Form';

import { Helmet } from 'react-helmet';


const POPULARS = ['Cobra Stallone', 'Cobra Kai', 'Rambo', 'Karate Kid', 'Jonh Wick'];

export default function Home() {
    const { loading, gifs } = useGifs();
    
    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
                <meta
                    name="description"
                    content="Gif searcher"
                />
            </Helmet>
            <header>
                <Form />
            </header>
            <div className="App-main">
                <div className="App-results" >
                    <h3>Ultima Busqueda</h3>
                    {
                        loading ?
                            <Spinner /> :
                            <GifsList gifs={gifs} />
                    }
                </div>
                <div className="App-category">
                    <Category name = 'Categorias Populares' options = {POPULARS} />
                    <TrendingSearches />
                </div>
            </div>

        </>
    )
}