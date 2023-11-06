import './images.css'
import React from 'react'

function Images({imageUrls, isSearching}) {
  return (
    <div className='container-gallery'>
        {
          !isSearching ? (
            <div className='gallery'>
              {imageUrls.map((img, index) => (
                  <div className='gallery-item'>
                    <img  src={img.urls.small} key={img.id} alt={img.slug} />
                  </div>
              ))}
            </div>
          ) : (
            <>
            </>
          )
        }
    </div>
  )
}

export default Images