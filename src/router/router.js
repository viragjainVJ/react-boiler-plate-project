import { createBrowserHistory, startListener, push, routerMiddleware as createMiddleware, routerReducer } from 'redux-first-routing';
import intl from 'react-intl-universal';
import UniversalRouter from 'universal-router';
import generateUrls from 'universal-router/generateUrls';
import { routes } from './routes';
import { isEqual } from 'lodash';
import { locale } from '../locales/en-US';

import { validateAuth, scheduleValidateAuth, cancelValidateAuth } from '../store/actions/authActions';

// Create the history object
const history = createBrowserHistory();

// Build the middleware with the history object
const routerMiddleware = createMiddleware(history);

let generateUrl = null;
const url = name => generateUrl(name, { encode: (value, token) => value });
const locales = {
  'en-US': locale
};
const configureRouter = (store, renderer) => {
  // Create the router
  const router = new UniversalRouter(routes, {
    resolveRoute(context, params) {
      if (typeof context.route.action === 'function') {
        if (context.route.authenticated) {
          store.dispatch(validateAuth());
          store.dispatch(cancelValidateAuth());
          store.dispatch(scheduleValidateAuth());
        } else {
          store.dispatch(cancelValidateAuth());
        }
        return context.route.action(context, params);
      }
      return undefined;
    }
  });
  generateUrl = generateUrls(router);
  // Start the history listener, which automatically dispatches actions to keep the store in sync with the history
  startListener(history, store);

  // Create the reactive render function
  function render(pathname, queries) {
    return router.resolve({ pathname, queries }).then(page => {
      if (page.redirect) {
        store.dispatch(push(url(page.redirect)));
      } else {
        renderer(page);
      }
    });
  }

  // Get the current pathname
  let currentRouterState = store.getState().router;
  let currentLocation = currentRouterState.pathname;
  let currentQueries = currentRouterState.queries;

  // Subscribe to the store location
  // const unsubscribe = store.subscribe(() => {
  store.subscribe(() => {
    const previousLocation = currentLocation;
    const previousQueries = currentQueries;

    currentLocation = store.getState().router.pathname;
    currentQueries = store.getState().router.queries;

    if (previousLocation !== currentLocation || !isEqual(currentQueries, previousQueries)) {
      // console.log('Some deep nested property changed from', previousLocation, 'to', currentLocation)
      intl
        .init({
          currentLocale: (currentQueries && currentQueries.lang) || 'en-US',
          locales
        })
        .then(() => render(currentLocation, currentQueries));
    }
  });

  // Call render function once, on app start
  // console.log('Current location is ', currentLocation)
  return Promise.all([
    intl
      .init({
        currentLocale: (currentQueries && currentQueries.lang) || 'en-US',
        locales
      })
      .then(() => render(currentLocation, currentQueries))
  ]);
};

export { history, configureRouter, routerMiddleware, routerReducer, url };
