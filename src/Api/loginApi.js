import axios from 'axios'
import { API } from './Url';

const login = async (body) => {
    try {
        const response = await axios.post(`${API}user/login`,body);
        return response.data;
    } catch (error) {
        console.error('login')
        return undefined
    }
}

const register = async (body) => {
    try {
        const result = await axios({
            method: 'post',
            url: `${API}/user/register`,
            data: body
        })
        return result.data;
    } catch (error) {
        
    }
}

export {
    login,
    register
};