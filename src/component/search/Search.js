import './search.css'
import React, { useState } from 'react'

function Search({context, setContext, setOldImage, setPage, setIsLoading, setIsSearching, page}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        if(inputValue !== context) {
            setIsLoading(true);
            setIsSearching(true);
            setOldImage([]);
            if(inputValue === '') {
                setPage(page + 1);
                setContext('random')
            } else {
                setPage(1);
                setContext(inputValue);
            }
        } 
    };

    return (
        <div className='search'>
            <input className='search-input' onChange={handleInputChange} value={inputValue} />
            <button className='search-btn' onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search