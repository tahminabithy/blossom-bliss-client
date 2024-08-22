import axios from 'axios';
import React from 'react'

const axiosPublic = axios.create({
    baseURL: "http://localhost:3002"
})
export default function useAxiosPublic() {
    return axiosPublic
}
