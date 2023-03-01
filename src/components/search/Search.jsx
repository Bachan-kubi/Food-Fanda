import React, { useEffect, useState } from 'react';
import './style.css';

const Search = (props) => {
    const [inputValue, setInputValue] = useState('');
    // console.log(props);
    const {getDataFromSearch, apiCallSuc, setApiCallSuc} = props;

    const handleInput=(event)=>{
        const {value} = event.target;
        setInputValue(value);
    }
    console.log(inputValue)
    // handle submit
    const handleSubmit=(event)=>{
        event.preventDefault();
        getDataFromSearch(inputValue);
    };
    // reset search form
    useEffect(()=>{
        if(apiCallSuc){
            setInputValue('')
            setApiCallSuc(false)
        }
    },[apiCallSuc]);

    return (
        <form onSubmit={handleSubmit} className='search'>
            <input name='search' onChange={handleInput} value={inputValue} placeholder='Type Items' id="search"/>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Search;