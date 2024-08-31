import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { authContext } from '../context/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

export default function useUser() {
    const { user } = useContext(authContext)
    const axiosSecure = useAxiosSecure();
    const { data: dbUser = {}, isPending, refetch } = useQuery({
        queryKey: ['dbUser', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            console.log(res.data);
            return res.data
        }
    });

    return [dbUser, isPending, refetch]
}
