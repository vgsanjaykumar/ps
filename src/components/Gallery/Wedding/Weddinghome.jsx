import React from 'react'

import Wedgallerybanner from './Wedbanner'
import PreweddingGallery from '../../Wedd/Prewedding/Prewedgallery'
import PostweddingGallery from '../../Wedd/Postweddding/Postwedgallery'
import OutdoorGallery from '../../Wedd/Outdoor/Outdoorgallery'
import Booking from '../../Constants/Booking'
import GalleryNavbar from '../Gallerynavbar'

const GalleryWeddinghome = () => {
    return (
        <div>
            <Wedgallerybanner />
            <GalleryNavbar/>
            <PreweddingGallery />
            <PostweddingGallery />
            <OutdoorGallery />
            <Booking/>

        </div>
    )
}

export default GalleryWeddinghome
