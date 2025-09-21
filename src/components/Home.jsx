import React from 'react'

import Events from './Event'

import Numbercount from './Numbercount'

import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonals'
import BookNowNew from './BookNowNew'
import WhyChooseUs from './WhyChooseus'
import ContactForm from './Enquriy'
import SubscribeSection from './Subscripition'


const Home = () => {
    return (
        <div>

            <Hero />
            <Events />
            <About />
            <WhyChooseUs/>
            <SubscribeSection />
       
            <ContactForm/>
            <BookNowNew />
            
            


        </div>
    )
}


export default Home
