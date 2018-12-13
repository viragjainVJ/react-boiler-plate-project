import Cookies from 'js-cookie';
import appConfig from '../appConfig';

async function authTokenToCookie(auth) {
  Cookies.set(appConfig.authCookieName, auth);
  return appConfig.authCookieName;
}
async function deleteAuthTokenFromCookie() {
  Cookies.remove(appConfig.authCookieName);
  return appConfig.authCookieName;
}

async function authTokenFromCookie() {
  const authToken = Cookies.get(appConfig.authCookieName);
  return {
    authToken: authToken
  };
}

export { authTokenToCookie, authTokenFromCookie, deleteAuthTokenFromCookie };
