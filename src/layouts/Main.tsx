import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { FC } from 'src/utils/types';
import { GlobalStyle } from 'src/themes/styles';
import css from 'src/themes/styles/SkStyles.scss';

const _MainLayout: FC<ComponentProps<'div'>> = ({ children, ...props }) => (
  <div {...props} className={css.thing}>
    <link
      href="https://fonts.googleapis.com/css?family=Archivo&display=swap"
      rel="stylesheet"
    />
    <GlobalStyle />
    {children}
  </div>
);

export const MainLayout = styled(_MainLayout)`
  margin: 0 auto;
  width: 80%;
`;
