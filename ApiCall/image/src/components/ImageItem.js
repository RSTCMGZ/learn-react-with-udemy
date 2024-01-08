import React from 'react'

function ImageItem({ image }) {
    return (
        <div>
            <img className='imgListImg' src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}

export default ImageItem