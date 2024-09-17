import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthProvider'
import Swal from 'sweetalert2';
import GmailBtn from '../../components/GmailBtn/GmailBtn';
import { Helmet } from 'react-helmet';


export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const { setLoading, loginUser } = useContext(authContext);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                localStorage.setItem("user", user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate(from, { replace: true })
                setLoading(false)
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
            <Helmet>
                <title>Blossom & Bliss | Login</title>
            </Helmet>
            <div className='flex justify-center items-center m-4 my-10 md:my-12 lg:h-screen'>
                <div className='border border-gray-400 p-10 md:p-16'>
                    <h1 className='text-xl font-semibold'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input required type='email' placeholder='Email' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none '  {...register("email")} />
                        <br />

                        <input required type='password' placeholder='password' className='border-b-2 border-gray-500 my-2 w-full md:w-96 py-4 px-2 focus:outline-none' {...register("password")} />
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
