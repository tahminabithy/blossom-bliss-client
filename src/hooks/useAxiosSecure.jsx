import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthProvider';

const axiosSecure = axios.create({
    baseURL: "http://localhost:3002"
})
export default function useAxiosSecure() {
    const navigate = useNavigate();
    const { logOut } = useContext(authContext)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token');
        config.headers.authorization = `Bearer ${token}`;

        return config
    }, function (error) {
        return Promise.reject(error)
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async function (error) {
        const status = error.response.status;

        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error)
    })

    return axiosSecure
}
