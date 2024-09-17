import axios from 'axios';
import React from 'react'

const axiosPublic = axios.create({
    baseURL: "https://blossom-bliss-server-site.vercel.app"
})
export default function useAxiosPublic() {
    return axiosPublic
}
