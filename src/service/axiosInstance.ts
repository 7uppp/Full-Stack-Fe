import axios from 'axios';

//create an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8070/api/v1'
});

let isFirstRefreshing = true;
//set request interceptor
axiosInstance.interceptors.request.use(
    config => {
        const accessToken = JSON.parse(localStorage.getItem('tokens') ?? '{}' ).accessToken || JSON.parse(sessionStorage.getItem('tokens') ?? '{}' ).accessToken;
        if (accessToken) {
            config.headers['authorization'] = 'Bearer ' + accessToken;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//set response interceptor
axiosInstance.interceptors.response.use(

    response => response,
    async error => {
        console.log(error)

        if (error.response.status === 401  && isFirstRefreshing) { // token expired
            isFirstRefreshing = false;
            try {
                const refreshToken = JSON.parse(localStorage.getItem('tokens') ?? '{}' ).refreshToken || JSON.parse(sessionStorage.getItem('tokens') ?? '{}' ).refreshToken
                ;

                if(!refreshToken) throw new Error('no token found ');
                const response = await axiosInstance.post('/refreshToken', {},{
                    headers:{
                        'refreshtoken': refreshToken
                    }
                });

                const newToken = response.data.accessToken;

                try {
                    localStorage.setItem('accessToken', newToken);
                } catch (error) {
                    console.error("Failed to set item in localStorage:", error);
                           }

                try {
                    sessionStorage.setItem('accessToken', newToken);
                } catch (error2) {
                    console.error("Failed to set item in sessionStorage:", error2);
                }

                // retry the request
                error.config.headers.authorization = `Bearer ${newToken}`;
                return axiosInstance(error.config);
            }
            catch (error) {
                console.error('no token found in localStorage or sessionStorage')
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
