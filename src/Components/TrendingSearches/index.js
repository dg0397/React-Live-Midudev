import React, {Suspense} from 'react';

import useNearScreen from "hooks/useNearScreen";
import Spinner from 'Components/Spinner';

const TrendingSearches = React.lazy(
    () => import('Components/TrendingSearches/TrendingSearches')
)

export default function LazyTrending(){
    const {isNearScreen,fromRef} = useNearScreen({distance : "200px"});
    

    return <div ref = {fromRef} >
        <Suspense fallback = {<Spinner/>}>
            {isNearScreen ? <TrendingSearches /> : <Spinner/>}
        </Suspense>
    </div>
}