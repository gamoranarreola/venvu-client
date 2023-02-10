import { environment as defaultEnvironment } from './environment.default';


export const environment = {
  production: false,
  apiHost: 'http://127.0.0.1:5000/',
  auth: {
    domain: "dev-dh8aqmc6.us.auth0.com",
    clientId: "7eAQJF8uFLTdGb7t75mVZIeXEX3kp6Kh",
    authorizationParams: {
      audience: "https://vms-b2b.app",
      redirect_uri: "http://localhost:4200/f/dashboard"
    }
  },
  ...defaultEnvironment
};
