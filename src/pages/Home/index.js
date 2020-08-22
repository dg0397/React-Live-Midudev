import React, { useState } from 'react'

import { useLocation } from 'wouter';

import Spinner from 'Components/Spinner/index';
import GifsList from 'Components/GifsList/GifsList';

import TrendingSearches from 'Components/TrendingSearches/index';
import Category from 'Components/Category/Category';


import useGifs from 'hooks/useGifs';



const POPULARS = ['Cobra Stallone', 'Cobra Kai', 'Rambo', 'Karate Kid', 'Jonh Wick'];

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const [, setPath] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = (e) => {
        e.preventDefault();
        //GO TO SOME ROUTE
        setPath(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setKeyword(value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} value={keyword} type='text' placeholder='Search a gif here...' />
                <button>Search</button>
            </form>
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