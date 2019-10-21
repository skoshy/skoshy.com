import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { FC } from 'src/utils/types';
import { GlobalStyle, GlobalStyleAsCss } from 'src/themes/styles';
import css from 'src/themes/styles/SkStyles.scss';
import { withLayoutWrapper } from 'src/utils/withLayoutWrapper';

const _MainLayout: FC<ComponentProps<'div'>> = ({ children, ...props }) => (
  <div {...props} className={css.thing}>
    <link
      href="https://fonts.googleapis.com/css?family=Archivo&display=swap"
      rel="stylesheet"
    />
    {children}
  </div>
);

export const MainLayout = withLayoutWrapper(styled(_MainLayout)`
  margin: 0 auto;
  width: 80%;
`);
