import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import useUser from '../../../hooks/useUser';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

export default function AddReview() {
    const [rating, setRating] = useState(0); // State to manage the rating
    const axiosPublic = useAxiosPublic();
    const [dbUser] = useUser();
    const handleRatingChange = (value) => {
        setRating(value);
        // You can add additional logic here, like sending the rating to a server or storing it in state


    };

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        data.rating = rating;
        const res = await axiosPublic.post('/reviews', data)
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thanks for your feedback !!!",
                showConfirmButton: false,
                timer: 1000
            });
            reset();
            setRating(0);
        }

    }

    return (
        <div className='p-8'>
            <Helmet>
                <title>Dashboard | Review</title>
            </Helmet>
            <h1 className='my-8  text-center text-2xl md:text-4xl font-regular md:font-bold'><span className='text-[#F63E7B] md:font-bold'>Add</span> Review</h1>
            <div className='flex justify-center items-center  px-6 py-8  md:py-16 mx-0 md:mx-56  border border-black'>

                <form className='w-full md:w-96' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="" className='text-sm ml-2'>Designation</label>
                    <input className='w-full input input-bordered  mt-2 mb-8' type="text" required placeholder='company name,designation' {...register("designation")} />
                    <br />
                    <label htmlFor="" className='text-sm ml-2'>name</label>
                    <input className='w-full input input-bordered  mt-2 mb-8' type="text" required placeholder='your name' defaultValue={dbUser?.name} {...register("name")} />
                    <br />
                    <label htmlFor="" className='text-sm ml-2'>Description</label>
                    <textarea
                        {...register("description")}
                        placeholder="Enter Description"
                        className="textarea textarea-bordered textarea-lg w-full mt-2 h-40">
                    </textarea>
                    {/* <input {...register("image")} type="file" className="file-input file-input-bordered bg-[#FFEAF3] mt-2 w-full" /> */}
                    <div className="flex items-center ">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`btn btn-ghost text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                                onClick={() => handleRatingChange(star)}
                            >
                                ★
                            </button>
                        ))}
                    </div>


                    <div className='flex justify-end mt-6'>
                        <button type='submit' className=' bg-[#F63E7B] text-white px-6 py-2 rounded-md hover:bg-[#FFEAF3] hover:text-black'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
