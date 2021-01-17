/**
 *
 * AuthStateApp
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { I18n } from 'aws-amplify';

import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';

import { messages } from './messages';

interface Props {}

export function AuthStateApp(props: Props) {
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
    I18n.setLanguage(i18n.language);
  }, [i18n]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <>
      <Helmet>
        <title>Nect merchant management console </title>
        <meta name="description" content="Nect merchant management console" />
      </Helmet>
      {authState === AuthState.SignedIn && user ? (
        <Div></Div>
      ) : (
        <AmplifyAuthenticator usernameAlias="email">
          <AmplifySignUp
            slot="sign-up"
            usernameAlias="email"
            formFields={[
              {
                type: 'email',
                label: t(messages.emailLabel),
                placeholder: t(messages.emailPlaceholder),
                required: true,
              },
              {
                type: 'password',
                label: t(messages.passwordLabel),
                placeholder: t(messages.passwordPlaceholder),
                required: true,
              },
              {
                type: 'given_name',
                label: t(messages.firstNameLabel),
                placeholder: t(messages.firstNamePlaceholder),
                required: true,
              },
              {
                type: 'family_name',
                label: t(messages.lastNameLabel),
                placeholder: t(messages.lastNamePlaceholder),
                required: true,
              },
            ]}
          />
          <AmplifySignIn slot="sign-in" usernameAlias="email" />
        </AmplifyAuthenticator>
      )}
    </>
  );
}

const Div = styled.div``;
