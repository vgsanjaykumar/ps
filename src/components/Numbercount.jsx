import React from 'react'
import CountUp from 'react-countup';

const Numbercount = () => {
    return (
        <section className='bg-gray-200 text-gray-800 box-border '>
            <div className='container grid grid-cols-2 md:grid-cols-4'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-3xl font-semibold'>
                        <CountUp
                            start={0}
                            end={10}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true} />
                    </p>
                    <p className=''>Locations</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-3xl font-semibold'>
                        <CountUp
                            start={0}
                            end={500}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true} />+
                    </p>
                    <p>ModelShoot</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-3xl font-semibold'>
                        <CountUp
                            start={0}
                            end={100}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true} />+
                    </p>
                    <p>Weddings</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-3xl font-semibold'>
                        <CountUp
                            start={0}
                            end={1}
                            duration={4}
                            enableScrollSpy={true}
                            scrollSpyOnce={true} />
                    </p>
                    <p>Dream</p>
                </div>

            </div>
        </section>
    )
}

export default Numbercount
