import React from 'react'
import CommonBtn from '../../../components/CommonBtn/CommonBtn'
import bannerBg from "../../../assets/images/bannerBg.png"
import { Link } from 'react-router-dom'
export default function Banner() {
    return (
        <section className='bg-[#FFF8F5] w-full py-2'>
            <div className='max-w-screen-2xl mx-auto px-4 md:px-8'>
                <div className='grid cols-1 md:grid-cols-2 gap-8 '>
                    <div className='flex flex-col p-4'>
                        <div className='py-6 md:py-10'>
                            <p className='text-3xl leading-relaxed md:text-5xl font-semibold  uppercase md:leading-relaxed'>Beauty Salon <br /> For every women</p>
                            <p className='my-8 text-light text-wrap'>We believe that every woman deserves to feel confident, radiant, and empowered. Our salon is a haven where beauty meets care, designed just for you. Whether you're here for a quick refresh or a full transformation, we’re dedicated to celebrating your unique beauty, inside and out.

                                <br /> Come as you are, leave as the best version of yourself. Because you deserve it—every day, in every way.
                            </p>
                            <Link to="/allServices"><CommonBtn title={"Get an Appointment"} /></Link>

                        </div>

                    </div>
                    <div className='order-first md:order-last'>

                        <img className='md:p-6' src={bannerBg} alt="" />
                    </div>
                </div>
            </div>


        </section>
    )
}
