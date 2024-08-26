import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from './useAxiosPublic'

export default function useServices() {
    const axiosPublic = useAxiosPublic();
    const { data: services = [], isPending, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            // console.log(res.data);

            return res.data;
        }
    })
    return [services, isPending, refetch]
}
