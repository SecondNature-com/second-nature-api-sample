import { adjectives, names, companyRecipients, suffixes } from './values';
import {
  applyChances,
  randomBase64Id,
  randomBool,
  randomHexColor,
  randomInt,
  randomName,
  randomNumber,
  randomPercent,
  randomPhoneNumber,
  randomString,
} from '../shared/misc.factory';

const randomCompanyName = (): string =>
  randomName([adjectives, names, suffixes]);

const randomDomain = (companyName: string): string =>
  companyName.replace(/\s/g, '').toLowerCase() + '.com';

const randomCompanyEmail = (domain: string): string => {
  const recipient =
    companyRecipients[Math.floor(Math.random() * companyRecipients.length)];
  return `${recipient}@${domain}`;
};

export function randomCompany(): CreateCompanyVO {
  const companyName = randomCompanyName();
  const domain = randomDomain(companyName);
  const company = {
    name: companyName,
    phoneNumber: randomPhoneNumber(),
    email: randomCompanyEmail(domain),
    erp: randomString(randomInt(0, 20)),
    rbpAddendum: randomString(randomInt(0, 20)),
    rbpFmv: randomNumber(),
    hvacDeliveryFrequency: randomNumber(),
    leaseViolationFee: randomPercent(),
    insuranceCoverageFee: randomPercent(),
    logoImageUrl: randomCompanyLogoUrl(domain),
    subdomain: randomString(randomInt(0, 20)),
    primaryBrandColor: randomHexColor(),
    secondaryBrandColor: randomHexColor(),
    fontBrandColor: randomHexColor(),
    externalId: randomBase64Id(),
  };
  const meta = {
    name: { chanceOfNull: 0 },
    phoneNumber: { chanceOfNull: 0.8 },
    email: { chanceOfNull: 0.5 },
    erp: { chanceOfNull: 0.5 },
    rbpAddendum: { chanceOfNull: 0.5 },
    rbpFmv: { chanceOfNull: 0.5 },
    hvacDeliveryFrequency: { chanceOfNull: 0.5 },
    leaseViolationFee: { chanceOfNull: 0.5 },
    insuranceCoverageFee: { chanceOfNull: 0.5 },
    logoImageUrl: { chanceOfNull: 0.5 },
    subdomain: { chanceOfNull: 0.5 },
    primaryBrandColor: { chanceOfNull: 0.5 },
    secondaryBrandColor: { chanceOfNull: 0.5 },
    fontBrandColor: { chanceOfNull: 0.5 },
    externalId: { chanceOfNull: 0.5 },
  };
  applyChances(company, meta);

  return company;
}

function randomCompanyLogoUrl(domain: string): string {
  const subdomains = ['www', 'blog', 'store', 'app', 'cdn'];
  const folders = ['images', 'assets', 'media', 'files'];
  const filenames = ['logo', 'brand', 'icon', 'mark', 'emblem'];
  const extensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
  const includeSubdomains = randomBool();
  const includeFolders = randomBool();
  const subdomain = includeSubdomains
    ? subdomains[Math.floor(Math.random() * subdomains.length)]
    : '';
  const folder = includeFolders
    ? folders[Math.floor(Math.random() * folders.length)]
    : '';
  const extension = extensions[Math.floor(Math.random() * extensions.length)];
  const filename = `${filenames[Math.floor(Math.random() * filenames.length)]}`;

  return `https://${subdomain}${domain}/${folder}${filename}.${extension}`;
}
