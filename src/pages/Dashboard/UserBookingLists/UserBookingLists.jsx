import React, { useState } from 'react'
import { FaTrashCan } from 'react-icons/fa6';
import img from '../../../assets/icons/logo3.png'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { set } from 'react-hook-form';
import useBookings from '../../../hooks/useBookings';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
export default function userBookingLists() {
    const axiosSecure = useAxiosSecure();
    const [price, setPrice] = useState(0);
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);
    const [bookingLists, refetch] = useBookings();

    const navigate = useNavigate();


    const handleAllCheck = (e) => {
        const checked = e.target.checked;
        setIsAllChecked(checked);
        if (checked) {
            setSelectedServices(bookingLists.map(list => list._id))
            const total = bookingLists.reduce((acc, list) => acc + list.price, 0)
            setPrice(total)
        }
        else {
            setPrice(0);
            setSelectedServices([])
        }
    }
    const handlePriceCount = (e, list) => {
        if (e.target.checked) {
            setSelectedServices(prev => [...prev, list._id])
            setPrice(price => price + list.price)
        }
        else {
            setSelectedServices(prev => prev.filter(id => id !== list._id))
            setPrice(prev => prev - list.price)
        }
    }

    const handlePay = () => {
        navigate('/dashboard/payment', { state: { price, selectedServices } })

    }
    const handleBookingDelete = (id) => {
        Swal.fire({
            title: "Do you want to delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/booking/${id}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item is deleted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }

            }
        });


    }

    // const description = services.find(service => service.title === bookingLists.title)
    return (
        <div className='py-16 md:px-12 px-8'>
            <h1 className='my-8  text-center text-2xl md:text-4xl font-regular md:font-bold'><span className='text-[#F63E7B] md:font-bold'>Booking</span> Lists</h1>
            {
                price > 0 ? <button onClick={() => handlePay()} className='btn btn-outline bg-pink-700 text-white' >Pay {price}$</button> :
                    <button disabled className='btn btn-outline bg-pink-700 text-white' >Pay {price}$</button>
            }



            <div className="overflow-x-auto pt-8">
                <table className="table">
                    {/* head */}
                    <thead className='bg-pink-700 text-white text-lg'>
                        <tr>
                            <th>
                                <label>
                                    <input onChange={handleAllCheck} checked={isAllChecked} type="checkbox" className="checkbox bg-white border border-black" />
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-300">
                        {/* row 1 */}
                        {
                            bookingLists?.map((list) => (
                                <tr key={list._id}>
                                    <th>
                                        <label>
                                            <input checked={selectedServices.includes(list._id)} onChange={(e) => handlePriceCount(e, list)} type="checkbox" className="checkbox brder-2 bg-white" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={img}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{list.title}</div>
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {list.description}

                                    </td>
                                    <td>
                                        {list.price}

                                    </td>
                                    <td>{list.payment_method}</td>
                                    <td>{list.status}</td>
                                    <th>
                                        <button onClick={() => handleBookingDelete(list._id)} className="btn btn bg-pink-700 btn-xs text-white btn-md"><FaTrashCan /></button>
                                    </th>
                                </tr>

                            ))
                        }


                    </tbody>

                </table>
            </div>
        </div>
    )
}
