import axios from 'axios';
import { config } from './config';

export async function login(): Promise<LoginResponse> {
  let reqConfig = {
    method: 'post',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `${config.apiUrl}/auth/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: config.credentials,
  };
  const response = await axios.request(reqConfig);
  return response.data;
}
