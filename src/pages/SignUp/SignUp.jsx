import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthProvider'
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import GmailBtn from '../../components/GmailBtn/GmailBtn';

export default function SignUp() {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const { registerUser } = useContext(authContext);
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password does not match",
                // timer: 1500
            });
            return;
        }
        registerUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userInfo = {
                    email: data.email,
                    name: data.firstName + ' ' + data.lastName,
                }
                if (user) {
                    axiosPublic.post('/user', userInfo).then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Logged in successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate(from, { replace: true })
                            window.location.reload();
                        }

                    })
                }


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);

                if (errorCode) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: errorMessage,
                        // timer: 1500
                    });
                }
                // ..
            });
        reset();
    }
    return (
        <div>
            {/* ---------form--------- */}
            <div className='flex justify-center items-center my-12'>
                <div className='border border-gray-400 p-10 md:p-16'>
                    <h1 className='text-xl font-semibold'>Create an account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input required type='text' placeholder='First Name' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none'  {...register("firstName")} />
                        <br />
                        <input required type='text' placeholder='Last Name' className='border-b-2 border-gray-500 my-2 w-full md:w-96 py-4 px-2 focus:outline-none' {...register("lastName")} />
                        <br />

                        <input required type='email' placeholder='Email' className='border-b-2 border-gray-500 my-2 w-full md:w-96 py-4 px-2 focus:outline-none' {...register("email")} />
                        <br />
                        <input required type='password' placeholder='password' className='border-b-2 border-gray-500 my-2 w-full md:w-96 py-4 px-2 focus:outline-none' {...register("password")} />
                        <br />
                        <input required type='password' placeholder='Confirm Password' className='border-b-2 border-gray-500 my-2 w-full md:w-96 py-4 px-2 focus:outline-none' {...register("confirmPassword")} />
                        <div className='flex justify-center items-center mt-6 '>
                            <button type='submit' className='w-full md:w-96 bg-[#F63E7B] text-white px-6 py-2 rounded-md hover:bg-[#FFEAF3] hover:text-black'>Register</button>
                        </div>
                    </form>
                    <p className='my-2 text-center'>Already have an account? <span className='text-[#F63E7B]'><Link to="/login">Login</Link> </span></p>
                    <div className="divider">OR</div>
                    <GmailBtn />
                </div>
            </div>

        </div>
    )
}
