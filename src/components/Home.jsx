import React from 'react'

import Events from './Event'

import Numbercount from './Numbercount'

import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonals'
import BookNowNew from './BookNowNew'
import WhyChooseUs from './WhyChooseus'
import ContactForm from './Enquriy'


const Home = () => {
    return (
        <div>

            <Hero />
            <Events />

            <Numbercount />


            
            <About />
            <WhyChooseUs/>
            
            <Testimonials />
            <ContactForm/>
            <BookNowNew />
            
            


        </div>
    )
}


export default Home
