import React from 'react'

import Events from './Event'

import Numbercount from './Numbercount'

import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonals'
import BookNowNew from './BookNowNew'
import WhyChooseUs from './WhyChooseus'
import ContactForm from './Enquriy'

import WeddingCoupleSection from './WeddingCoupleSection'
import NumCount from './Numcount'
import OutdoorCoupleShoot from './CoupleSection'


const Home = () => {
    return (
        <div>

            <Hero />
            <WeddingCoupleSection />
            <OutdoorCoupleShoot />
            <About />
            <NumCount />
            <WhyChooseUs/>
            <Events />
            <Testimonials/>
            <ContactForm/>
            <BookNowNew />
            
            


        </div>
    )
}


export default Home
