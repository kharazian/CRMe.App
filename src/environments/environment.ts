import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'CRM',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44333/',
    redirectUri: baseUrl,
    clientId: 'CRM_App',
    scope: 'offline_access CRM',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44333',
      rootNamespace: 'CRM',
    },
  },
} as Environment;
