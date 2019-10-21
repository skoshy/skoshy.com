import React from 'react';
import Head from 'next/head';
import { isDev } from 'src/utils/constants';
import { GlobalStyleAsCss, GlobalStyle } from 'src/themes/styles';

export const withLayoutWrapper = Component => {
  // fixes a bug with global styles not re-rendering with hot reloading for styled-components 5
  const styledComponentsGlobalStylesForDev = isDev ? (
    <Head>
      <style type="text/css" data-name="global-styles-for-hot-reloading">
        {GlobalStyleAsCss}
      </style>
    </Head>
  ) : null;

  const LayoutWrapper = props => (
    <>
      {styledComponentsGlobalStylesForDev}
      <GlobalStyle />
      <Component {...props} />
    </>
  );

  return LayoutWrapper;
};
