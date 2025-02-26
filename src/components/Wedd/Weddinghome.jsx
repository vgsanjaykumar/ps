import React from 'react'
import Weddingbanner from './Weddingbanner'
import About from '../About'
import WeddingNavbar from './Wednavbar'
import Weddingoutdoor from './Weddingoutdoor'
import OutdoorGallery from './Outdoorgallery'

const Weddinghome = () => {
  return (
    <div>
        <Weddingbanner/>
        <WeddingNavbar/>
        <Weddingoutdoor/>
        <OutdoorGallery/>
        <About/>
    </div>
  )
}

export default Weddinghome
