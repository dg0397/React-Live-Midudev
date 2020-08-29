import React,{useState} from 'react';


function Form({handleSubmitProp}){
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //GO TO SOME ROUTE
        handleSubmitProp({keyword})
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setKeyword(value)
    }
    return(
        <form onSubmit={handleSubmit} >
                <input onChange={handleChange} value={keyword} type='text' placeholder='Search a gif here...' />
                <button>Search</button>
        </form>
    )
}

export default React.memo(Form)