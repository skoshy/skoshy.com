import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'src/styles/global.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Stefan Koshy</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
