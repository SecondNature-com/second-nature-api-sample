import { randomCompany } from './companies/companies.factory';
import { createCompany } from './companies/company.helper';
import { getApiKeys } from './shared/getApiKeys';
import { login } from './login';
import { randomPMUser } from './property-manager-users/pm-user.factory';
import { createPMUser } from './property-manager-users/pm-user.helper';
import { randomConfiguration } from './configurations/configurations.factory';
import { createConfiguration } from './configurations/configurations.helper';

async function bootstrap() {
  const loginResponse = await login();
  const apiKeys = await getApiKeys(loginResponse.access_token);

  for (let i = 0; i < 10; i++) {
    const company = await createCompany(apiKeys, randomCompany());
    for (let j = 0; j < 5; j++) {
      await createPMUser(apiKeys, company.id, randomPMUser(company));
      await createConfiguration(apiKeys, randomConfiguration(company));
      //await createProperties(apiKeys, randomProperty(company));
      //await createPropertyFilters(apiKeys, randomFilter(property));
    }
  }
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
