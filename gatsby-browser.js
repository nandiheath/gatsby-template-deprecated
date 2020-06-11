import React from 'react';
import { PageContextProvider } from '@/components/templates/PageContext';
import { createInstance } from '@/i18n';
import { I18nextProvider } from 'react-i18next';

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
  return (
    <I18nextProvider i18n={createInstance(props.pageContext.lang)}>
      <PageContextProvider pageContext={props.pageContext}>{element}</PageContextProvider>
    </I18nextProvider>
  );
};