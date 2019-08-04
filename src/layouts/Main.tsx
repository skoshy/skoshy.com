import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { FC } from 'src/utils/types';
import { GlobalStyle } from 'src/themes/styles';

const _MainLayout: FC<ComponentProps<'div'>> = ({ children, ...props }) => (
  <div {...props}>
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
