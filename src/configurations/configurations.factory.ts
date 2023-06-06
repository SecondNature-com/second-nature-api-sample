import {
  applyChances,
  randomBool,
  randomInt,
  randomNumber,
} from '../shared/misc.factory';

function randomServices(): ConfigurationServiceVO[] {
  const services: ConfigurationServiceVO[] = [];
  const numServices = randomInt(0, 4);
  for (let i = 0; i < numServices; i++) {
    services.push({
      serviceId: randomInt(1, 14),
      description: '<service description here>',
      includedInBasePackage: randomBool(),
      additionalCost: randomNumber(),
    });
  }
  return services;
}
export function randomConfiguration(
  company: CompanyResponseVO,
): CreateConfigurationVO {
  const configuration = {
    propertyManagerId: company.id,
    name: '<configuration ' + randomInt(0, 1000)+ '>',
    startDate: 'YYYY-MM-DD',
    endDate: 'YYYY-MM-DD',
    leaseType: 'default',
    services: randomServices(),
  };
  const meta = {
    propertyManagerId: { chanceOfNull: 0 },
    name: { chanceOfNull: 0 },
    startDate: { chanceOfNull: 0 },
    endDate: { chanceOfNull: 1 },
    leaseType: { chanceOfNull: 0 },
    services: randomServices(),
  };
  applyChances(company, meta);

  return configuration;
}
