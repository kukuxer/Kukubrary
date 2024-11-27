export const oktaconfig = {
  clientId: '0oalfhociocMlPbke5d7',
  issuer: 'https://dev-00232743.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpCheck: true,
}