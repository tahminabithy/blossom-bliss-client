import React, { useContext } from 'react'
import CommonBtn from '../../../components/CommonBtn/CommonBtn'
import { authContext } from '../../../context/AuthProvider'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

export default function MakeAdmin() {
    const { user } = useContext(authContext);
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const res = axiosPublic.patch(`/user/admin/${data.email}`)
        console.log("yes", res);
    }
    return (
        <div>
            <h1 className='my-8 md:my-20 text-center text-4xl font-regular md:font-bold'>Make<span className='text-[#F63E7B] md:font-bold ml-4'>Admin</span></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center items-center'>
                    <div className='w-full md:w-96'>
                        <input {...register("email")} defaultValue={user?.email} type="email" placeholder="jon@gmail.com" className="input input-bordered w-full " />
                    </div>
                    <button type='submit' className='bg-[#F63E7B] text-white border px-4 py-2 rounded-md ml-4'>Submit</button>
                </div>
            </form>
        </div>

    )
}
