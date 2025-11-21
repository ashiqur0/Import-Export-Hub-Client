import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const instance = axios.create({
    baseURL: 'https://import-export-hub-api-server-by-ash.vercel.app'
});

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        // request interceptor
        const requestInterceptor = instance.interceptors.request.use((config) => {
            const token = user.accessToken;

            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        });

        // response interceptor
        const responseInterceptor = instance.interceptors.response.use(res => {
            return res;
        }, err => {
            const status = err.status;
            if (status === 401 || status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
            }
        })

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        }

    }, [user, navigate, logOut]);

    return instance;
};

export default useAxiosSecure;