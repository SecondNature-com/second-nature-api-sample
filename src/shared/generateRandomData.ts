import { randomCompany } from '../companies/companies.factory';
import { createCompany } from '../companies/company.helper';
import { randomPMUser } from '../property-manager-users/pm-user.factory';
import { createPMUser } from '../property-manager-users/pm-user.helper';
import { randomConfiguration } from '../configurations/configurations.factory';
import { createConfiguration } from '../configurations/configurations.helper';

export async function generateRandomData(apiKeys: ApiKeysResponse): Promise<void> {
  const companiesToAdd = 1;
  const maxUsersPerCompany = 5;
  const maxConfigsPerCompany = 5;

  for (let i = 0; i < companiesToAdd; i++) {
    const company = await createCompany(apiKeys, randomCompany());
    for (let j = 0; j < maxUsersPerCompany; j++) {
      await createPMUser(apiKeys, company.id, randomPMUser(company));
    }
    for (let j = 0; j < maxConfigsPerCompany; j++) {
      await createConfiguration(apiKeys, randomConfiguration(company));
    }
    /*
    const maxPropertiesPerCompany = 5;
    const maxFitersPreProperties = 5;
    for (let j = 0; j < maxConfigsPerCompany; j++) {
      await createProperties(apiKeys, randomProperty(company));
      await createPropertyFilters(apiKeys, randomFilter(property));
    }
    */
  }
}
