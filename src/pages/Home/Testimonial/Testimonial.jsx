import React, { useEffect, useState } from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Rating } from '@mui/material';



export default function Testimonial() {
    const axiosPublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);
    const topReviews = reviews.slice(0, 3);
    useEffect(() => {
        fetch('http://localhost:3002/reviews').then(res => res.json()).then((data) => {
            setReviews(data)
        })
    }, [])
    return (
        <section className='container mx-auto my-12 md:my-20 px-4 md:px-12'>
            <h1 className='mb-8 md:mb-20 text-center text-xl md:text-3xl font-regular md:font-bold'>Our Happy  <span className='text-[#F63E7B] md:font-bold'>Customers</span></h1>
            <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    topReviews.map((review) => (
                        <div className='bg-pink- p-6' key={review._id}>
                            <div className='flex justify-start items-center'>
                                <img className='rounded-full mr-4' src="https://cdn.prod.website-files.com/6132838810ceebe08d96644a/65e73e0a16a7c4d523a862b4_thumb_120x120_Tiffany_Shilling-web.png" alt="" />
                                <div >
                                    <p className='font-bold text-lg mb-2'>{review.name}</p>
                                    <p className='text-gray-500'>{review.designation}</p>
                                </div>
                            </div>
                            <p className='my-6 leading-relaxed'>{review.description}</p>
                            <div className='flex justify-center items-center'>
                                <Rating className='' readOnly value={review.rating} />
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}
