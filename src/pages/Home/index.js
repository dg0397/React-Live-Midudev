import React, {useState} from 'react'
import {Link, useLocation} from 'wouter'
import Spinner from '../../Components/Spinner/index';
import GifsList from '../../Components/GifsList/GifsList'
import useGifs from '../../hooks/useGifs';

const POPULARS = ['Cobra Stallone','Cobra Kai','Rambo','Karate Kid','Jonh Wick'];

export default function Home(){
    const [keyword,setKeyword] = useState('');
    const [path,setPath] = useLocation();
    const {loading,gifs} = useGifs();

    const handleSubmit = (e) => {
        e.preventDefault();
        //GO TO SOME ROUTE
        setPath(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setKeyword(value)
    }

    return(
        <>
            <form onSubmit = {handleSubmit} >
                <input  onChange = {handleChange} value = {keyword} type = 'text' placeholder ='Search a gif here...' />
                <button>Search</button>
            </form>
            <h3>Ultima Busqueda</h3>
            {
            loading ?
            <Spinner /> :
            <GifsList gifs = {gifs}  />
            }
            <h3 className='App-title'>Los Gifs mas populares</h3>
            <ul>
                {
                    POPULARS.map( gif => {
                        return(
                            <li key = {gif} >
                                <Link to = {`/search/${gif}`}>
                                    {gif} Gifs
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}