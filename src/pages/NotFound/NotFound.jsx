import React from 'react'
import img from '../../assets/images/notFound.jpg'
import { useLocation } from 'react-router-dom';
export default function NotFound() {


    return (
        <div className='flex justify-center items-center'>
            <img className='w-96 h-96' src={img} alt="" />
        </div>
    )
}
