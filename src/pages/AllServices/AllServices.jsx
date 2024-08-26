import React, { useState } from 'react'
import useServices from '../../hooks/useServices'
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import BookingModal from '../../components/BookingModal/BookingModal';

export default function AllServices() {
    const [services] = useServices();
    // const [openModal, setOpenModal] = useState(false)
    // const [id, setId] = useState('');
    // const handleOpenModal = (id) => {
    //     console.log(id);

    //     setOpenModal(true);
    //     setId(id)
    // }
    // const handleCloseModal = () => {
    //     setOpenModal(false);


    // }
    return (
        <div className='container mx-auto my-12 md:my-20 px-4 md:px-12'>
            <h1 className='mb-8 md:mb-20 text-center text-4xl font-regular md:font-bold'><span className='text-[#F63E7B] md:font-bold'>Services</span> We Provide</h1>
            <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-36 gap-y-20 '>
                {
                    services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))
                }

            </div>
            {/* {openModal && <BookingModal id={id} handleCloseModal={handleCloseModal} />} */}
        </div>
    )
}
