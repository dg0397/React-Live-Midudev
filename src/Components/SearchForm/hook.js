import {useReducer} from 'react';


const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE : 'update_language',
    UPDATE_ALL_STATE : 'update_all_state'
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
    }),
    [ACTIONS.UPDATE_LANGUAGE] : (state,action) => ({
        ...state,
        language : action.payload
    }),
    [ACTIONS.UPDATE_ALL_STATE] : (state,action) => ({
        ...state,
        keyword : '',
        rating : 'g',
        language : 'en'
    })
}

const REDUCER = (state, action) => {
    const actionReducer = ACTIONS_REDUCERS[action.type];
    return actionReducer ? actionReducer(state,action) : state
}

export default function useForm({initialKeyword = 'America',initialRating = 'g', initialLanguage = 'en'} = {}){
    const [state, dispatch] = useReducer(REDUCER, {
        keyword: decodeURIComponent(initialKeyword),
        times: 0,
        rating: initialRating,
        language : initialLanguage
    })
    const {keyword,times,rating,language} = state;

    return{
        keyword,
        times,
        rating,
        language,
        updateKeyword : keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating : rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
        updateLanguage : language => dispatch({type : ACTIONS.UPDATE_LANGUAGE , payload : language }),
        updateAllState : () => dispatch({type : ACTIONS.UPDATE_ALL_STATE})

    }
}