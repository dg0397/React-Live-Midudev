import React from 'react';
import { useLocation } from 'wouter';
import useForm from 'Components/SearchForm/hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r'];
const LANGUAGES = [
    { name : "Spanish", value: 'es'} , 
    { name : "English", value : 'en'},
    { name : "Arabic" , value : "ar"},
    { name : "French" , value : "fr"},
    { name : "Italian" , value : "it"},
    { name : "Hindi" , value : "hi"},
    { name : "Japanese" , value : "ja"},
    { name : "German" , value : "de"},
    { name : "Chinese Traditional" , value : "zh-TW"}
]

function Form({ initialKeyword = '', initialRating ,initialLanguage }) {
    const { keyword, times, rating,language,updateKeyword,updateRating,updateLanguage,updateAllState} = useForm({initialKeyword,initialRating,initialLanguage})
    const [, setPath] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        //GO TO SOME ROUTE
        setPath(`/search/${keyword}/${rating}/${language}`)
    }

    const handleChange = (e) => {
        const { value: keyword } = e.target;
        updateKeyword(keyword)
    }

    const handleChangeRating = e => {
        const { value: rating } = e.target;
        updateRating(rating)
    }
    const handleChangeLanguage = e => {
        const {value:language} = e.target;
        updateLanguage(language)
    }
    const handleEraserButton = e => {
        updateAllState()
    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} value={keyword} type='text' placeholder='Search a gif here...' />
            <button>Search</button>
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating Type</option>
                {RATINGS.map(rating => <option key={rating} >{rating}</option>)}
            </select>
            <select onChange = {handleChangeLanguage} value = {language} >
                <option disabled>Language Type</option>
                {LANGUAGES.map(language => <option key = {language.name} value = {language.value}>{language.name}</option> )}
            </select>
            <input type="button" value="Clear" onClick = {handleEraserButton}/>
            <span>{times}</span>
        </form>
    )
}

export default React.memo(Form)