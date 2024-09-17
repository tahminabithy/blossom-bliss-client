import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { authContext } from '../context/AuthProvider';
import useAxiosPublic from './useAxiosPublic';


export default function useUser() {
    const { user } = useContext(authContext)
    const axiosPublic = useAxiosPublic();

    const { data: dbUser = {}, isPending, refetch } = useQuery({
        queryKey: ['dbUser', user?.email],
        queryFn: async () => {
            console.log("user email", user?.email);
            const res = await axiosPublic.get(`/user/${user?.email}`)
            console.log("specific user data", res);
            return res.data
        }
    });

    return [dbUser, isPending, refetch]
}
