import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import Swal from 'sweetalert2';
import { FaTrashCan } from 'react-icons/fa6';

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
    const handleStatus = (e, id) => {
        const status = e.target.value;
        console.log(status, id);
        const data = { status: status }
        console.log(data);

        axiosPublic.patch(`/booking/${id}`, data).then(res => {
            console.log(res);
            Swal.fire({
                title: "Updated!",
                text: "Your file has been updated.",
                icon: "success",
                timer: 1000
            });
            refetch();
        })
    }
    const handleOrderDelete = (id) => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosPublic.delete(`/booking/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your order has been deleted!",
                            icon: "success",
                            timer: 1000
                        });
                        console.log(res);
                        refetch();
                    }

                })
            }
        });
    }
    return (
        <div className='px-4 py-10 max-h-screen'>
            <h1 className='mt-6  md:mt-12 text-center text-2xl md:text-4xl font-regular md:font-bold'>Order<span className='text-[#F63E7B] md:font-bold ml-2'>Lists</span></h1>
            <div className='flex justify-end items-center'>
                <h1 className='px-8 py-6  text-xl font-semibold' >Total Order: {orderlists.length}</h1>
            </div >

            <div className="overflow-auto  flex justify-center items-center max-h-screen">
                <table className="table table-xs table-pin-rows table-pin-cols px-6 max-h-screen">
                    {/* head */}
                    <thead className='' >
                        <tr className=' text-lg font-bold'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orderlists?.map((orderlist, index) => (
                                <tr key={index}>
                                    <td>{orderlist.name}</td>
                                    <td>{orderlist.email}</td>
                                    <td>{orderlist.title}</td>
                                    <td>{orderlist.payment_method}</td>
                                    <td>
                                        <select onChange={(e) => handleStatus(e, orderlist._id)} className="select select-ghost w-full max-w-xs">
                                            {/* <option disabled selected>Pick t</option> */}
                                            <option value={orderlist.status}>{orderlist.status}</option>
                                            <option value="Ongoing">Onging</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={() => handleOrderDelete(orderlist._id)} className="btn btn bg-pink-600 btn-xs text-white btn-md"><FaTrashCan /></button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
