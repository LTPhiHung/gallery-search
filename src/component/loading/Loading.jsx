import React from 'react'
import './loading.css'

function Loading({isSearching}) {
    return (
        <div className={`container-loading ${isSearching ? 'isSearching' : ''}`}>  
            <div className='loading'>

            </div>  
        </div>
    )
}

export default Loading