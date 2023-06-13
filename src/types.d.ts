interface LoginResponse {
  access_token: string;
}

interface ApiKeysResponse {
  apiKey: string;
  apiSecret: string;
}

interface CreateCompanyVO {
  name: string;
  phoneNumber?: string;
  email?: string;
  erp?: string;
  rbpAddendum?: string;
  rbpFmv?: number;
  hvacDeliveryFrequency?: number;
  leaseViolationFee?: number;
  insuranceCoverageFee?: number;
  primaryBrandColor?: string;
  secondaryBrandColor?: string;
  fontBrandColor?: string;
  logoImageUrl?: string;
  subdomain?: string;
  externalId?: string;
}

interface CompanyResponseVO {
  id: number;
  name: string;
  email: string;
  erpUrl: string;
  phoneNumber: string;
  rbpFee: number;
  parentId: number;
  fontColor: string;
  logoSrc: string;
  primaryBrandColor: string;
  secondaryBrandColor: string;
  subdomain: string;
  hvacFilterDeliveryDate: number;
  insuranceCoverage: number;
  leaseViolationFee: number;
  externalId: string;
  status: string;
}

interface CreatePMUserVO {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email?: string;
  username: string;
  isManager: true;
  managerId?: number;
  profilePictureUrl?: string;
}

interface ConfigurationServiceVO {
  serviceId: number
  description: string
  includedInBasePackage: boolean
  additionalCost: number
}

interface CreateConfigurationVO {
  propertyManagerId: number;
  name: string;
  startDate: string;
  endDate?: string;
  leaseType: string;
  services: ConfigurationServiceVO[],
};