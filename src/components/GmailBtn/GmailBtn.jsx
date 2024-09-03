import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { authContext } from '../../context/AuthProvider'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function GmailBtn() {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"
    const { gmailLogin } = useContext(authContext)
    const handleGmailLogin = () => {
        gmailLogin().then((result) => {
            const user = result.user;
            // const namesPart = user?.displayName.split(" ")
            const userInfo = {
                email: user.email,
                name: user.displayName,
                role: "user"
                // firstName: namesPart[0],
                // lastName: namesPart[1]
            }
            if (user) {
                axiosPublic.post('/user', userInfo).then(res => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Logged in successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from, { replace: true })
                })
            }

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }
    return (
        < div className='flex justify-center items-center'>
            <button onClick={handleGmailLogin} className="btn rounded-full border border-black bg-white w-full">
                <FaGoogle /> Sign Up with Google
            </button>
        </div>
    )
}
