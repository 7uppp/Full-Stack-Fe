import axios from 'axios';


interface DataPayload {
    email?: string;
    password?: string;
    [key: string]: unknown;
}

const baseUrl = 'http://localhost:8070/api/v1';

const makeRequest = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', endpoint: string = '', data: DataPayload | null = null) => {
    try {
        const response = await axios({
            method: method,
            url: `${baseUrl}${endpoint}`,
            data: data
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error; // re-throwing the error allows the caller to handle it if needed
    }
};

export default makeRequest;
