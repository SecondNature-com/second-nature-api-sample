import axios from 'axios';
import { config } from '../config';

export async function createConfiguration(
  apiKeys: ApiKeysResponse,
  configuration: CreateConfigurationVO,
) {
  let reqConfig = {
    method: 'post',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `${config.apiUrl}/companies`,
    headers: {
      'sn-api-key': apiKeys.apiKey,
      'sn-api-secret': apiKeys.apiSecret,
      'Content-Type': 'application/json',
    },
    data: configuration,
  };
  console.log('Creating configuration ' + configuration.name);
  try {
    const response = await axios.request(reqConfig);
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error('Failed creating company');
  }
}
