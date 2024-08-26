import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic'

export default function OrderList() {
    const axiosPublic = useAxiosPublic();
    const { data: orderlists = [], isPending, refetch } = useQuery({
        queryKey: ['orderlists'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookings');
            console.log(res.data);
            return res.data

        }
    })
    return (
        <div className='px-4 py-10'>
            <h1 className='my-8 md:my-20 text-center text-4xl font-regular md:font-bold'>Order<span className='text-[#F63E7B] md:font-bold ml-4'>Lists</span></h1>
            <h1>total order:{orderlists.length}</h1>
            <div className="overflow-x-auto flex justify-center items-center ">
                <table className="table table-pin-rows table-pin-cols md:ml-10">
                    {/* head */}
                    <thead className='' >
                        <tr className='bg-pink-300 text-lg font-bold'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderlists.map((orderlist, index) => (
                                <tr key={index}>
                                    <td>{orderlist.name}</td>
                                    <td>{orderlist.email}</td>
                                    <td>{orderlist.title}</td>
                                    <td>{orderlist.payment_method}</td>
                                    <td>{orderlist.title}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
