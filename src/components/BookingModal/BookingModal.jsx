import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { authContext } from '../../context/AuthProvider';
import credit from "../../assets/icons/credit-card.png"
import paypal from "../../assets/icons/pay-pal.png"

export default function BookingModal({ id, handleCloseModal }) {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(authContext)


    const { data: service = {}, isPending, refetch } = useQuery({
        queryKey: ['service', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/service/${id}`)
            console.log(res.data.title);
            return res.data;
        }
    })



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

    }
    return (
        <dialog className="modal" open>
            <div className="modal-box">
                <form method="dialog">
                    <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input required type='text' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' defaultValue={user?.displayName} {...register("name")} />
                        <input requird type='email' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' defaultValue={user.email} {...register("email")} />
                        <input required type='text' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='Service' defaultValue={service?.title} {...register("title")} />
                        <div className='flex  items-center mt-8'>
                            <input type="radio" name="radio-3" className="radio radio-primary" value="credit card" {...register("payment_method")} />
                            <span className='mx-2'> Credit Card</span>
                            <img className='w-8 h-8' src={credit} alt="" />
                        </div>
                        <div className='flex  items-center mt-8'>
                            <input type="radio" name="radio-3" className="radio radio-primary" value="paypal"  {...register("payment_method")} />
                            <span className='mx-2'>Paypal</span>
                            <img className='w-8 h-8' src={paypal} alt="" />
                        </div>
                        <input type='text' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='card number' defaultValue="" {...register("cardNumber")} />

                        <div className='flex justify-between items-center gap-6'>
                            <input type='text' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='Expired date' defaultValue="" {...register("expired_date")} />
                            <input type='text' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='cvc' defaultValue="" {...register("cvc")} />

                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <p>Service charge will be ${service.price}</p>
                        <div className='flex justify-end'>
                            <button type='submit'> pay</button>
                        </div>
                    </form>

                    <button onClick={() => handleCloseModal()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

            </div>
        </dialog>

    )
}
