import React from 'react'
import GalleryItem from './GalleryItem.jsx'

function Gallery(props) {

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery