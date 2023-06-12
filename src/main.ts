import { getApiKeys } from './shared/getApiKeys';
import { login } from './login';
import { generateRandomData } from './shared/generateRandomData';

async function bootstrap() {
  const loginResponse = await login();
  const apiKeys = await getApiKeys(loginResponse.access_token);

  await generateRandomData(apiKeys);
}

bootstrap()
  .then(() => {
    console.log(
      "Congratulations! You've successfully achieved awesomeness. Time to celebrate with a victory dance!",
    );
    process.exit();
  })
  .catch((error: Error) => {
    console.log(
      'Oh no! It seems like monkeys have invaded our code. Please stand by while we train them to fix this issue.',
      error.message,
    );
    process.exit();
  });
