import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import useAxiosPublic from './useAxiosPublic';
import { authContext } from '../context/AuthProvider';

export default function useUser() {
    const { user } = useContext(authContext)
    const axiosPublic = useAxiosPublic();
    const { data: dbUser = {}, isPending, refetch } = useQuery({
        queryKey: ['dbUser', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user?.email}`)
            console.log(res.data);
            return res.data
        }
    });

    return [dbUser, isPending, refetch]
}
