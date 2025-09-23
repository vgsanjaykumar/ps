import React from 'react'
import Maternitybanner from './Maternitybanner'
import MaternityGallery from './Maternitygallery'
import OthersNavbar from '../Othernavbar'
import Booking from '../../Constants/Booking'

const Maternityhome = () => {
    return (
        <div>
            <Maternitybanner />
            <OthersNavbar />
            <MaternityGallery />

            <Booking />
        </div>
    )
}

export default Maternityhome
