import './search.css'
import React, { useState } from 'react'

function Search({setContext, setImageUrls, setOldImage, setPage}) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setPage(1);
        setOldImage([]);
        setContext(inputValue);
    };

    return (
        <div className='search'>
            <input className='search-input' onChange={handleInputChange} value={inputValue} />
            <button className='search-btn' onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search