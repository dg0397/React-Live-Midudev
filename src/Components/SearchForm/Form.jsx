import React, { useReducer } from 'react';
import { useLocation } from 'wouter';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating'
}

const ACTIONS_REDUCERS = {
    [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
        ...state,
        keyword: action.payload,
        times: state.times + 1
    }),
    [ACTIONS.UPDATE_RATING]: (state, action) => ({
        ...state,
        rating: action.payload
    })
}

const reducer = (state, action) => {
    //switch (action.type) {
    //    case ACTIONS.UPDATE_KEYWORD:
    //        return {
    //            ...state,
    //            keyword : action.payload,
    //            times : state.times + 1
    //        }
    //    case ACTIONS.UPDATE_RATING:
    //        return {
    //            ...state,
    //            rating : action.payload
    //        }
    //    default:
    //        return state;
    //}

    const actionReducer = ACTIONS_REDUCERS[action.type];
    return actionReducer ? actionReducer(state,action) : state
}

function Form({ initialKeyword = '', initialRating }) {
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        times: 0,
        rating: initialRating
    })

    const { keyword, times, rating } = state


    const [, setPath] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        //GO TO SOME ROUTE
        setPath(`/search/${keyword}/${rating}`)
    }

    const handleChange = (e) => {
        const { value: keyword } = e.target;
        dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword })
    }
    const handleChangeRating = e => {
        const { value: rating } = e.target;
        dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} value={keyword} type='text' placeholder='Search a gif here...' />
            <button>Search</button>
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating Type</option>
                {RATINGS.map(rating => <option key={rating} >{rating}</option>)}
            </select>
            <span>{times}</span>
        </form>
    )
}

export default React.memo(Form)