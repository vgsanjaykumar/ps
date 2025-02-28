import React from 'react'
import OthersNavbar from '../Othernavbar'
import BabyGallery from './BabyGallery'
import Booking from '../../Constants/Booking'
import Babybanner from './Babybanner'
import weddingImage from "/award/img02.jpeg";
const Babyhome = () => {
    return (
        <div>
            <Babybanner weddingImage={weddingImage} />
            <OthersNavbar />
            <BabyGallery />
            <Booking />
        </div>
    )
}

export default Babyhome
