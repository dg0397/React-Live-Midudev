import React from 'react';
import {Link} from 'wouter';
import './Category.css'

export default function Category({ name, options }) {
    return (
        <div className = 'App-category' >
            <h3 className='Category-title'>{name}</h3>
            <ul>
                {
                    options.map(gif => {
                        return (
                            <li key={gif} >
                                <Link to={`/search/${gif}`}>
                                    {gif} Gifs
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}