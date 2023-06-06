import axios from 'axios';
import { config } from '../config';

export async function createPMUser(
  apiKeys: ApiKeysResponse,
  companyId: number,
  user: CreatePMUserVO,
) {
  let reqConfig = {
    method: 'post',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `${config.apiUrl}/companies/` + companyId + '/users',
    headers: {
      'sn-api-key': apiKeys.apiKey,
      'sn-api-secret': apiKeys.apiSecret,
      'Content-Type': 'application/json',
    },
    data: user,
  };
  console.log(
    'Creating user ' +
      user.firstName +
      ' ' +
      user.lastName +
      ' (' +
      user.username +
      ')',
  );
  try {
    const response = await axios.request(reqConfig);
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw new Error('Failed creating user');
  }
}
