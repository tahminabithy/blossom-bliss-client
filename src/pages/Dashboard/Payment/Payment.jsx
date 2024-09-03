import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_TEST_KEY);
export default function Payment() {
    const location = useLocation();
    const price = location?.state?.price || 0;
    const selectedServices = location?.state?.selectedServices || [];


    return (
        <div className='px-4 py-20 md:p-20'>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} selectedServices={selectedServices} />
            </Elements>
        </div>
    )
}
