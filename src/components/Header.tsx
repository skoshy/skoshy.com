import React from 'react';
import { css } from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import { FC } from 'src/utils/types';
import { Link } from 'src/components/base';

interface Types {
  siteTitle?: string;
}

const style = [
  css`
    background: rebeccapurple;
    margin: 0 auto;
    margin-bottom: 1.45rem;
    max-width: 960px;
  `,
];

export const Header: FC<Types> = ({ siteTitle = '' }) => (
  <div css={style}>
    <FlexContainer>
      <h1 style={{ flex: 1, margin: 0 }}>
        <Link href="/">{siteTitle}</Link>
      </h1>
      <Link href="/page-2">hi</Link>
      <Link href="https://google.com">external</Link>
    </FlexContainer>
  </div>
);
