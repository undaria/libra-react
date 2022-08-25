//import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise } from "axios";
import axios, { AxiosRequestConfig } from 'axios';

import { useState, useEffect } from 'react';
import { API_URL } from '@/config';
import { AuthUser } from '../types';
import storage from "@/utils/storage";


export const getUser = () => {
    const httpClient = axios.create({
        baseURL: API_URL,
        // baseURL: process.env.APP_API_BASE_URL,
    });
    httpClient.interceptors.request.use(function (config) {
        const token = storage.getToken();
        config.headers.Authorization =  token ? `JWT ${token}` : '';
        return config;
    });

    httpClient.interceptors.response.use(
        (response) => {
            const user = response.data;
            return user;
        },
        (error) => {
            console.log('-----error_getUser------');
            console.log(`${API_URL}auth/users/me`);
            console.log(error.message);
           // return Promise.reject(error);
           return null;
        }
      );
    const user =  httpClient.get('/auth/users/me');
    return user;

};
