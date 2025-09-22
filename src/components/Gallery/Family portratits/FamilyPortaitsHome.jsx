import React from 'react'
import CandidGallery from './FamilyPortaitsGallery'
import Candidbanner from './FamilyPortaitsBanner'
import GalleryNavbar from '../Gallerynavbar'
import Booking from '../../Constants/Booking'

const FamilyPortaitsHome = () => {
  return (
    <div>
      <Candidbanner/>
      <GalleryNavbar/>
      <CandidGallery/>
      <Booking/>
    </div>
  )
}

export default FamilyPortaitsHome
