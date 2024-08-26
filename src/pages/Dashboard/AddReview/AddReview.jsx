import React from 'react'
import { useForm } from 'react-hook-form'

export default function AddReview() {
    const { register, handleSubmit, } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <h1>review</h1>
            <div className='flex justify-center items-center p-4 md:p-12 '>
                <form className='w-full md:w-96 ' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="" className='text-sm ml-2'>Designation</label>
                    <input className='w-full input input-bordered  mt-2 mb-8' type="text" required placeholder='company name,designation' {...register("designation")} />
                    <br />
                    <label htmlFor="" className='text-sm ml-2'>name</label>
                    <input className='w-full input input-bordered  mt-2 mb-8' type="text" required placeholder='your name' {...register("name")} />
                    <br />
                    <label htmlFor="" className='text-sm ml-2'>Description</label>
                    <textarea
                        {...register("description")}
                        placeholder="Enter Description"
                        className="textarea textarea-bordered textarea-lg w-full mt-2 h-40">
                    </textarea>

                    <input {...register("image")} type="file" className="file-input file-input-bordered bg-[#FFEAF3] mt-2 w-full" />

                    <div className='flex justify-end mt-6'>
                        <button type='submit' className=' bg-[#F63E7B] text-white px-6 py-2 rounded-md hover:bg-[#FFEAF3] hover:text-black'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
