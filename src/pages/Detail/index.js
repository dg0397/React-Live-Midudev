import React from 'react';
import useSingleGif from 'hooks/useSingleGifs'
import Gif from 'Components/Gif/Gif';
import Spinner from 'Components/Spinner';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

export default function Detail({ params }) {
    const { singleGif, loadingSingleGif, isError } = useSingleGif(params);
    const title = singleGif ? singleGif.title : "";


    if (loadingSingleGif){
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }
    
    if (isError) return <Redirect to='/404' />
    
    if (!singleGif) return null;

    

    return (
        <>  
            <Helmet>
                <title>
                    {title} | Giffy
                </title>
            </Helmet>
            <h2>{singleGif.title}</h2>
            <Gif  {...singleGif} />
        </>
    )
}