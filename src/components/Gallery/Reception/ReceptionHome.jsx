import React from 'react'

import GalleryNavbar from '../Gallerynavbar'

import Booking from '../../Constants/Booking'
import Receptionbanner from './ReceptionBanner'
import ReceptionGallery from './ReceptionGallery'

const Receptionhome = () => {
  return (
    <div>
        <Receptionbanner/>
        <GalleryNavbar/>
        <ReceptionGallery/>
        <Booking/>
      
    </div>
  )
}

export default Receptionhome
