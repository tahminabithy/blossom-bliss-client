import React from 'react'
import image from '../../../assets/images/professionalFacial.png'
import useServices from '../../../hooks/useServices'
export default function Featured() {
    const [services] = useServices();

    return (
        <section className='bg-[#FFF8F5]'>
            <div className=' px-10 py-10 md:px-32 md:py-32'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32'>
                    <img src={image} alt="" />
                    <div>
                        <p className='text-3xl leading-loose md:text-4xl font-semibold md:leading-relaxed'>Let us pamper with <br />
                            <span className='text-[#F63E7B] font-semibold'> professional care.</span>
                        </p>
                        <p className='tracking-wide leading-8 font-light mt-4 text-wrap'>Transform your look with our expert beauty services, tailored just for you. Discover a new level of care and attention that brings out your
                            best. consectetur adipiscing elit. Purus commodo ipsum.
                        </p>
                        <div className='flex'>
                            <div>
                                <p className='mt-10 md:mt-20 text-5xl font-bold text-[#F63E7B] mb-4'>{services.length}0+</p>
                                <p>Happy Customer</p>
                            </div>
                            <div className='ml-10'>
                                <p className='mt-10 md:mt-20 text-5xl font-bold text-[#F63E7B] mb-4'>{services.length}+</p>
                                <p>Total Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </section >
    )
}

{/* <p className='text-4xl font-semibold leading-relaxed'>Let us handle your <br /> screen<span className='text-[#F63E7B] font-semibold'>Professionally</span>.</p> */ }