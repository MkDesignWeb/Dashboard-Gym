import axios from 'axios'

const api = axios.create({
    baseURL: "url.aki/api"
});

export const useApi = () => ({
    
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'ooMast3r', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token })
        return response.data
    },

    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, name: 'ooMast3r', email: 'ooMast3r@gmail.com' },
            token: '123456789'
        }
        const response = await api.post('/signin', { email, password })
        return response.data
    },

    logout: async () => {
        return { status: true }
        const response = await api.post('/logout')
        return response.data
    }
});