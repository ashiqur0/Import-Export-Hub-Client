import React from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://import-export-hub-api-server-by-ash.vercel.app'
})

const useAxios = () => {
    return instance;
};

export default useAxios;