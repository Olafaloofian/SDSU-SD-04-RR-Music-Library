import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext.jsx'
import GalleryItem from './GalleryItem.jsx'

function Gallery() {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
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