import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';
import useBookings from '../../../hooks/useBookings';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm({ price, selectedServices }) {
    const [bookingLists, refetch] = useBookings();
    const [user] = useUser()
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price }).then(res => {
            console.log(res.data);
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        //confirm payment 
        const { paymentIntent, err } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.name || "anonymous",
                    email: user.email || "anonymous",
                }
            }
        })
        if (err) {
            console.log(err);
        }
        else {
            console.log(paymentIntent);
            const payment = {
                email: user.email,
                name: user.name,
                price: price,
                date: new Date(),
                transactionId: paymentIntent?.id,
                services: selectedServices,
                status: "pending"
            }
            console.log("payment history", payment)
            const res = await axiosSecure.post('/paymentHistory', payment)
            console.log(res.data);
            if (res.data.insertedPayment.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment is done successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            refetch();
            navigate('/dashboard/paymentHistory')
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='w-full max-w-md p-4 bg-white shadow-lg rounded'>
                <CardElement
                    // className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none '
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',

                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-4 w-full py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-200 ease-in-out' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    )
}



{/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' className='w-full md:w-96 border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='card number' defaultValue="" {...register("cardNumber")} />
                <div className='flex justify-between items-center gap-6 w-full md:w-96'>
                    <input type='text' className='w-full  border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='Expired date' defaultValue="" {...register("expired_date")} />
                    <input type='text' className='w-full  border-b-2 border-gray-500 my-4 py-4 px-2 focus:outline-none ' placeholder='cvc' defaultValue="" {...register("cvc")} />
                </div>
                <input type="submit" />
            </form> */}