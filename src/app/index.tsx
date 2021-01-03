/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { AuthStateApp } from './containers/AuthStateApp/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Digital Payments"
        defaultTitle="Digital Payments"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Digital Payments" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin" component={AuthStateApp} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
