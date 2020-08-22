import React, {useState,useEffect} from 'react';
import Category from 'Components/Category/Category';
import getTrendingTerms from 'services/getTrendingTermsService';

export default function TrendingSearches(){
    const [trends,setTrends] = useState([]);

    useEffect(()=>{
        getTrendingTerms(setTrends)
    },[])

    return(
        <Category name = 'Trending' options = {trends} />
    )
}