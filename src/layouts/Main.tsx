import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { FC } from 'src/utils/types';
import { withLayoutWrapper } from 'src/utils/withLayoutWrapper';

const _MainLayout: FC<ComponentProps<'div'>> = ({ children, ...props }) => (
  <div {...props}>
    <link
      href="https://fonts.googleapis.com/css?family=Archivo&display=swap"
      rel="stylesheet"
    />
    {children}
  </div>
);

export const MainLayout = withLayoutWrapper(styled(_MainLayout)`
  margin: 0 auto;
`);
