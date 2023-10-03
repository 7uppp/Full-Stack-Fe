import axios from 'axios';

interface DataPayload {
    email?: string;
    password?: string;
    [key: string]: unknown;
}

const baseUrl = 'http://localhost:8070/api/v1';

const makeRequest = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', endpoint: string = '', data: DataPayload | null = null) => {
    try {
       return await axios({
            method: method,
            url: `${baseUrl}${endpoint}`,
            data: data
        });
    } catch (error) {
        // Check if it's an AxiosError and throw the complete error, not just the data
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
        }
        throw error;
    }
};

export default makeRequest;
