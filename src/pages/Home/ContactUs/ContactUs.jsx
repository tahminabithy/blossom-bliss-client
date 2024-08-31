import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import CommonBtn from '../../../components/CommonBtn/CommonBtn'
import { FaArrowUp } from 'react-icons/fa6'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
export default function ContactUs() {
    const form = useRef();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        data.name = data.firstname + ' ' + data.lastname;
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_USER_ID)
            .then(res => {
                console.log(res);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "message sent successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }).catch(err => {
                console.log(err);
            })

    }
    return (
        <div className='bg-[#FFF8F5] '>
            <div className='py-16 md:py-24 flex justify-center items-center'>
                <div className=''>
                    <p className='text-center text-3xl leading-loose md:text-4xl font-semibold md:leading-relaxed mb-16'>Reach out to us for   <br />
                        <span className='text-[#F63E7B] font-semibold'>Professional Care</span>.
                    </p>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid cols-1 md:grid-cols-2 gap-8'>
                            <input defaultValue="" {...register("firstname")} type="text" placeholder="First name" className="px-2 py-4 w-96 rounded-md focus:outline-none" />
                            <input defaultValue="" {...register("lastname")} type="text" placeholder="Last name" className="px-2 py-4 w-96 rounded-md focus:outline-none" />
                        </div>
                        <div className='grid cols-1 md:grid-cols-2 gap-8 mt-6'>
                            <input required defaultValue="" {...register("email address")} type="email" placeholder="Email address" className="px-2 py-4 w-96 rounded-md focus:outline-none" />
                            <input defaultValue="" {...register("phone")} type="text" placeholder="Phone number" className="px-2 py-4 w-96 rounded-md focus:outline-none" />
                        </div>
                        <textarea
                            {...register("message")}
                            placeholder="Your message"
                            className="h-40 md:h-52 textarea  textarea-lg w-full px-2 py-4 mt-6 focus:outline-none"></textarea>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className='flex justify-center items-center mt-8'>
                            <CommonBtn type='submit' title="Send Message"><FaArrowUp /></CommonBtn>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}



