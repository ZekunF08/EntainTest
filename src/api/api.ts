import axios, {AxiosError, AxiosResponse} from 'axios';

export const baseURL = 'https://api.neds.com.au/';

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`response`, response);
    return response.data;
  },
  (error: AxiosError) => {
    console.log(`error`, JSON.stringify(error));
    return Promise.reject(error);
  },
);
