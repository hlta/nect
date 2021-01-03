/**
 *
 * Asynchronously loads the component for AuthStateApp
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AuthStateApp = lazyLoad(
  () => import('./index'),
  module => module.AuthStateApp,
);
