import axios from 'axios';
import { config } from '../config';

export async function createCompany(
  apiKeys: ApiKeysResponse,
  company: CreateCompanyVO,
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
    data: company,
  };
  console.log('Creating company ' + company.name);
  try {
    const response = await axios.request(reqConfig);
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error('Failed creating company');
  }
}
