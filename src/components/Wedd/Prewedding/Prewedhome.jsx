import React from 'react'
import PreWeddingbanner from './prewedbanner'
import WeddingNavbar from '../Wednavbar'
import PreWeddingAbout from './Prewedabout'
import PreweddingGallery from './Prewedgallery'

const Prewedhome = () => {
    return (
        <div>
            <PreWeddingbanner />
            <WeddingNavbar />
            <PreWeddingAbout />
            <PreweddingGallery />
        </div>
    )
}

export default Prewedhome
