import axios from 'axios'
import { API } from './Url';

export const getAllUser = async () => {
    try {
        const response = await axios.get(`${API}user/getAllUsers`);
        return response.data;
    } catch (error) {
        console.error('login')
        return undefined
    }
}