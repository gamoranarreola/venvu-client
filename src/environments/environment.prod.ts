import { environment as defaultEnvironment } from './environment.default';

export const environment = {
  production: true,
  apiHost: 'https://venvu-api.herokuapp.com/',
  auth: {
    domain: "dev-dh8aqmc6.us.auth0.com",
    clientId: "7eAQJF8uFLTdGb7t75mVZIeXEX3kp6Kh",
    redirectUri: "https://venvu-client.herokuapp.com/f/dashboard",
    logoutUrl: "https://venvu-client.herokuapp.com",
    audience: "https://vms-b2b.app"
  },
  ...defaultEnvironment
};
