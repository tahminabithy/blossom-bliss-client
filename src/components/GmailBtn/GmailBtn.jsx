import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function GmailBtn() {
    return (
        < div className='flex justify-center items-center'>
            <button className="btn rounded-full border border-black bg-white w-full">
                <FaGoogle /> Sign Up with Google
            </button>
        </div>
    )
}
