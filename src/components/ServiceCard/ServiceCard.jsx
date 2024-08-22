import React from 'react'

export default function ServiceCard({ service }) {
    const { title, image, price, description } = service;
    return (
        <div className='flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFF8F5]  duration-300 hover:shadow-xl rounded-xl'>
            <div className='text-center p-6 ' >
                <div className='flex justify-center'>
                    <img className='h-28 w-28' src={image} alt="" />
                </div>

                <h3 className='md:text-2xl font-semibold my-2 md:my-6'>{title}</h3>
                <p className='md:text-2xl text-[#F63E7B] mb-2'>${price}</p>
                <p className='md:text-lg font-extralight text-gray-500'>{description}</p>
            </div>
        </div>
    )
}
