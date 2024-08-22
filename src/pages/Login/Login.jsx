import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthProvider'
import Swal from 'sweetalert2';
import GmailBtn from '../../components/GmailBtn/GmailBtn';


export default function Login() {
    const navigate = useNavigate();
    const { loginUser } = useContext(authContext);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        loginUser(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("yes", user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);

            });

    }
    return (
        <div>
            {/* ---------form--------- */}
            <div className='flex justify-center items-center my-12 md:my-20'>
                <div className='border border-gray-400 p-10 md:p-16'>
                    <h1 className='text-xl font-semibold'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' placeholder='Email' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none '  {...register("email")} />
                        <br />

                        <input type='password' placeholder='password' className='border-b-2 border-gray-500 my-2 w-full md:w-96 py-4 px-2 focus:outline-none' {...register("password")} />
                        <div className='flex justify-center items-center mt-6 '>
                            <button type='submit' className='w-full md:w-96 bg-[#F63E7B] text-white px-6 py-2 rounded-md hover:bg-[#FFEAF3] hover:text-black'>Login</button>
                        </div>
                    </form>
                    <p className='my-2 text-center'>Don't have account?<Link to='/signUp'><span className='text-[#F63E7B] ml-2'>Create an account</span></Link></p>
                    <div className="divider">OR</div>
                    <GmailBtn />
                </div>


            </div>

        </div>
    )
}
