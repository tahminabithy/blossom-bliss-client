import React from 'react'
import { useQuery } from '@tanstack/react-query';
import useUser from './useUser';
import useAxiosPublic from './useAxiosPublic';
export default function useBookings() {
    const axiosPublic = useAxiosPublic();
    const [user] = useUser();
    const { data: bookingLists = [], isPending, refetch } = useQuery({
        queryKey: ['bookingLists', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bookingLists/${user?.email}`);
            console.log("yess", res.data);
            return res.data;
        }
    })
    return [bookingLists, refetch]
}
