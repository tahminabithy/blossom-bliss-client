import React, { useState } from 'react'
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, handleOpenModal }) {
    const { _id, title, image, price, description } = service;
    return (
        <div className='flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFF8F5]  duration-300 hover:shadow-xl rounded-xl'>
            <div className='text-center p-6 ' >
                <div className='flex justify-center'>
                    <img className='h-28 w-28' src={image} alt="" />
                </div>

                <h3 className='md:text-2xl font-semibold my-2 md:my-6'>{title}</h3>
                <p className='md:text-2xl text-[#F63E7B] mb-2'>${price}</p>
                <p className='md:text-lg font-extralight text-gray-500'>{description}</p>
                <Link to={`/dashboard/bookingForm/${_id}`}>
                    <button className="mt-6 btn  btn-sm text-white border hover:border-pink-600 bg-[#F63E7B] hover:bg-white hover:text-[#F63E7B]"> Book Now <FaHeartCircleCheck /></button>
                </Link>
            </div>
        </div>
    )
}
