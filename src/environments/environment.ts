import { environment as defaultEnvironment } from './environment.default';


export const environment = {
  production: false,
  apiHost: 'http://127.0.0.1:5000/',
  auth: {
    domain: "dev-dh8aqmc6.us.auth0.com",
    clientId: "7eAQJF8uFLTdGb7t75mVZIeXEX3kp6Kh",
    redirectUri: "http://localhost:4201/f/dashboard",
    audience: "https://vms-b2b.app",
    logoutUrl: "http://localhost:4201"
  },
  ...defaultEnvironment
};
