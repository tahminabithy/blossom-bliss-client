import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import useUser from '../../../hooks/useUser';
import { FaTrashCan } from 'react-icons/fa6';

export default function PaymentHistory() {
    const [dbUser] = useUser();
    const axiosSecure = useAxiosSecure();
    const { data: paymentHistory = [], refetch } = useQuery({
        queryKey: ['paymentHistory', dbUser?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`paymentHistory/${dbUser?.email}`);
            console.log(res.data);
            return res.data
        }
    })
    return (
        <div>
            <div className='py-16 md:px-12 px-8'>
                <h1 className='my-8  text-center text-2xl md:text-4xl font-regular md:font-bold'><span className='text-[#F63E7B] md:font-bold'>Payment</span> History</h1>




                <div className="overflow-x-auto pt-8">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-pink-700 text-white text-lg'>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Date</th>
                                <th>Email</th>
                                <th>Amount</th>

                                <th>Total Services</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-300">
                            {/* row 1 */}
                            {
                                paymentHistory?.map((list) => (
                                    <tr key={list._id}>
                                        <td>
                                            {list.transactionId}

                                        </td>
                                        <td>
                                            <div className="flex items-center ">

                                                <div>
                                                    <div className="font-bold">{list.date}</div>
                                                    {/* <div className="text-sm opacity-50">United States</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {list.email}

                                        </td>
                                        <td>
                                            {list.price}

                                        </td>
                                        <td>{list.services.length}</td>

                                        <th>
                                            <button className="btn btn bg-pink-700 btn-xs text-white btn-md"><FaTrashCan /></button>
                                        </th>
                                    </tr>

                                ))
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}
