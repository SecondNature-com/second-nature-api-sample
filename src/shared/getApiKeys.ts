import axios from 'axios';
import { config } from '../config';

export async function getApiKeys(
  accessToken: string,
): Promise<ApiKeysResponse> {
  let reqConfig = {
    method: 'post',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `${config.apiUrl}/api-keys`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
    data: {
      description: 'string',
      type: 'internal',
      //propertyManagerId: 1,
    },
  };
  const response = await axios.request(reqConfig);
  return response.data;
}
