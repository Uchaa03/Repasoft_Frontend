//Api backend calls for use in components
import axios from 'axios';

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
        userId,
        code,
    });
    return response.data;
};
