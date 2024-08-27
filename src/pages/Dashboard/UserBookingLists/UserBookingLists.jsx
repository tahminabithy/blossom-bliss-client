import React from 'react'
import useUser from '../../../hooks/useUser'
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import img from '../../../assets/icons/logo3.png'
import useServices from '../../../hooks/useServices';
export default function userBookingLists() {
    const [user] = useUser();
    const [services] = useServices();
    const axiosPublic = useAxiosPublic();
    const { data: bookingLists = [], isPending, refetch } = useQuery({
        queryKey: ['bookingLists', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookingLists/${user?.email}`);
            console.log("yess", res.data);
            return res.data;
        }
    })
    // const description = services.find(service => service.title === bookingLists.title)
    return (
        <div className='py-16 md:px-12 px-8'>
            <h1 className='my-8  text-center text-2xl md:text-4xl font-regular md:font-bold'><span className='text-[#F63E7B] md:font-bold'>Booking</span> Lists</h1>

            <div className="overflow-x-auto pt-8">
                <table className="table">
                    {/* head */}
                    <thead className='bg-pink-700 text-white text-lg'>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookingLists?.map((list) => (
                                <tr key={list._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
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
                                    <td>   {list.payment_method}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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
