import React from 'react'
import Weddingbanner from './Weddingbanner'
import About from '../About'
import WeddingNavbar from './Wednavbar'
import Weddingoutdoor from './Weddingoutdoor'
import OutdoorGallery from './Outdoorgallery'
import Booking from '../Constants/Booking'

const Weddinghome = () => {
  return (
    <div>
        <Weddingbanner/>
        <WeddingNavbar/>
        <Weddingoutdoor/>
        <OutdoorGallery/>
        <Booking/>
        
    </div>
  )
}

export default Weddinghome
