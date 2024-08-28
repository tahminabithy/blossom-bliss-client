import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from "react-hook-form"

import useAxiosPublic from '../../../hooks/useAxiosPublic'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function AddServices() {
    const axiosPublic = useAxiosPublic();
    const imgKey = import.meta.env.VITE_IMAGE_API_KEY
    console.log(imgKey);

    const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgKey}`
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data.image[0])
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgHostingApi, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        if (res.data) {
            console.log('yes');

            const serviceData = {
                title: data.title,
                price: parseFloat(data.price),
                image: res?.data.data.display_url,
                description: data.description
            }
            console.log(serviceData);
            console.log(axiosPublic);
            const result = await axiosPublic.post('/services', serviceData);
            console.log(result.data);
            if (result.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            reset();


        }


    }
    return (
        <div className='py-12'>
            <Helmet>
                <title>Blossom & Bliss | Add Services</title>
            </Helmet>
            <h1 className='pt-8 md:pt-16 text-center text-xl md:text-4xl font-regular md:font-bold'><span className='text-[#F63E7B] md:font-bold'>Add</span> Services</h1>

            <div className='flex justify-center items-center p-4 md:p-12'>

                <form className='w-full md:w-96 ' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="" className='text-sm ml-2'>Sevice Title</label>
                    <input className='w-full input input-bordered  mt-2 mb-8' type="text" required placeholder='Enter Title' {...register("title")} />
                    <br />
                    <label htmlFor="" className='text-sm ml-2'>prices</label>
                    <input className='w-full input input-bordered  mt-2 mb-8' type="text" required placeholder='price' {...register("price")} />
                    <br />
                    <label htmlFor="" className='text-sm ml-2'>Description</label>
                    <textarea
                        {...register("description")}
                        placeholder="Enter Description"
                        className="textarea textarea-bordered textarea-lg w-full mt-2 h-40">
                    </textarea>

                    <input {...register("image")} type="file" className="file-input file-input-bordered bg-[#FFEAF3] mt-2 w-full" />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className='flex justify-end mt-6'>
                        <button type='submit' className='mt-2 bg-[#F63E7B] text-white px-6 py-2 rounded-md hover:bg-[#FFEAF3] hover:text-black'>Submit</button>
                    </div>



                </form>
            </div>

        </div>
    )
}
