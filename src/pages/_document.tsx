import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet } from 'styled-components';
import { GlobalStyleAsCss, GlobalStyle } from 'src/themes/styles';
import { Analytics } from 'src/components/Analytics';

export default class MyDocument extends Document {
  public static async getInitialProps(ctx): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Analytics />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
