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
    align-items: center;
    background: rebeccapurple;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    margin: 0;
    margin-bottom: 1.45rem;
    max-width: 960px;
    padding: 8px;

    a {
      color: inherit;
    }
  `,
];

export const Header: FC<Types> = ({ siteTitle = process.env.SITE_TITLE }) => (
  <div css={style}>
    <h1 style={{ flex: 1, margin: 0 }}>
      <Link href="/">{siteTitle}</Link>
    </h1>
    <Link href="https://github.com/skoshy">GitHub</Link>
  </div>
);