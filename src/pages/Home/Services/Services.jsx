import React from 'react'
import logo1 from "../../../assets/icons/logo.png"
import useServices from '../../../hooks/useServices'
import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import CommonBtn from '../../../components/CommonBtn/CommonBtn';


export default function Services() {
    const [services] = useServices();
    console.log(services);
    const someService = services.slice(0, 3)

    return (
        <section className='container mx-auto my-12 md:my-20 px-4 md:px-12'>
            <h1 className='mb-8 md:mb-20 text-center text-3xl font-regular md:font-bold'>Our Awesome  <span className='text-[#F63E7B] md:font-bold'>Services</span></h1>
            {/* ------------------------ */}
            <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-36'>
                {
                    someService.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))
                }

            </div>
            <div className='flex justify-center mt-16'><CommonBtn title={"Explore More"} /></div>

        </section>
    )
}
