import React, { useState } from 'react';
import './style.css';

const Search = (props) => {
    const [inputValue, setInputValue] = useState('');
    // console.log(props);
    const {getDataFromSearch} = props;

    const handleInput=(event)=>{
        const {value} = event.target;
        setInputValue(value);
    }
    console.log(inputValue)
    const handleSubmit=(event)=>{
        event.preventDefault();
        getDataFromSearch(inputValue);
    }
    return (
        <form onSubmit={handleSubmit} className='search'>
            <input name='search' onChange={handleInput} value={inputValue} placeholder='Type Items' id="search"/>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Search;