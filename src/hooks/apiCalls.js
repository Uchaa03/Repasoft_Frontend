//Api backend calls for use in components
import axios from 'axios';
import useAuthStore from "../store/authStore.js";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});



export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const register = async (name, email, password, password_confirmation) => {
    try {
        const response = await axiosInstance.post('/api/auth/register-admin', {
            name,
            email,
            password,
            password_confirmation
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verifyCode = async (userId, code) => {
    const response = await axiosInstance.post('/api/auth/verify-2fa', {
        user_id: userId,
        code: code,
    });
    return response.data;
};


export const fetchDashboardMetrics = async (token) => {
    console.log(token)
    try {
        const response = await axiosInstance.get('/api/admin/dashboard/metrics', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};