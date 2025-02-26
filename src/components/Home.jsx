import React from 'react'

import Events from './Event'

import Numbercount from './Numbercount'

import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonals'
import BookNow from './Booknowbanner'


const Home = () => {
    return (
        <div>

            <Hero />
            <Events />

            <Numbercount />

            
            <About />
            <BookNow />
            <Testimonials />
            


        </div>
    )
}


export default Home
