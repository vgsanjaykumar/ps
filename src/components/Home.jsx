import React from 'react'

import Events from './Event'

import Numbercount from './Numbercount'

import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonals'
import BookNowNew from './BookNowNew'
import WhyChooseUs from './WhyChooseus'
import ContactForm from './Enquriy'

import WeddingCoupleSection from './WeddingPreSection'
import NumCount from './Numcount'
import OutdoorCoupleShoot from './OudoorCoupleSection'
import Weddingmagzine from './Weddingmagzine'
import Modelshoot from './ModelShoot'
import Babysection from './BabySection'
import Footer1 from './Footer'


const Home = () => {
    return (
        <div>

            <Hero />
            <Modelshoot />
            <WeddingCoupleSection />
            
            <OutdoorCoupleShoot />
            <Weddingmagzine />
            <Babysection/>
          
            <About />
            <NumCount />
            <WhyChooseUs/>
            <Events />
            <Testimonials/>
            <ContactForm/>
            <Footer1/>
            {/* <BookNowNew /> */}
            
            


        </div>
    )
}


export default Home
