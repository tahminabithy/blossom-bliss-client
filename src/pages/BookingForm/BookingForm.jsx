import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { authContext } from '../../context/AuthProvider';
import credit from "../../assets/icons/credit-card.png"
import paypal from "../../assets/icons/pay-pal.png"
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import CommonBtn from '../../components/CommonBtn/CommonBtn';
import useUser from '../../hooks/useUser';

export default function BookingForm() {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [user] = useUser();
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
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        data.title = service.title;
        data.description = service.description;
        data.price = service.price;
        data.status = "Pending"
        console.log(data)
        const result = await axiosPublic.post('/bookings', data)
        console.log(result);
        if (result.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your appointment has been booked",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
        }


    }
    return (
        <div className=' py-16'>
            <h1 className='mb-4 md:mb-10  text-center text-2xl md:text-4xl font-regular md:font-bold'><span className='text-[#F63E7B] md:font-bold'>Book Your</span> Services</h1>
            <div className='flex justify-center items-center'>


                <form className='px-10 md:px-28 py-6 md:py-10 shadow-lg bg-gray-400 mx-4' onSubmit={handleSubmit(onSubmit)}>

                    {/* register your input into the hook by invoking the "register" function */}
                    <input required type='text' className='w-full md:w-96  border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' defaultValue={user?.name} {...register("name")} />
                    <br />
                    <input requird type='email' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' defaultValue={user.email} {...register("email")} />
                    <br />
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

                    <div className='flex justify-between items-center gap-6 w-full md:w-96'>
                        <input type='text' className='w-full  border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='Expired date' defaultValue="" {...register("expired_date")} />
                        <input type='text' className='w-full  border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='cvc' defaultValue="" {...register("cvc")} />

                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <p>Service charge will be ${service.price}</p>
                    <div className='flex justify-end mt-6'>
                        <CommonBtn type='submit' title={'Pay'} />
                    </div>
                </form>
            </div>

        </div>
    )
}
