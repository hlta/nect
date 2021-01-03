/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  emailLabel: _t(translations.authStateApp.emailLabel, 'Email'),
  emailPlaceholder: _t(
    translations.authStateApp.emailPlaceholder,
    'Your email',
  ),
  passwordLabel: _t(translations.authStateApp.passwordLabel, 'Password'),
  passwordPlaceholder: _t(
    translations.authStateApp.passwordPlaceholder,
    'Your password',
  ),
  firstNameLabel: _t(translations.authStateApp.firstNameLabel, 'First name'),
  firstNamePlaceholder: _t(
    translations.authStateApp.firstNamePlaceholder,
    'John',
  ),
  lastNameLabel: _t(translations.authStateApp.lastNameLabel, 'Last name'),
  lastNamePlaceholder: _t(translations.authStateApp.lastNamePlaceholder, 'Doe'),
};
