import React from 'react';
import { css } from 'styled-components';
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
    color: white;
    display: flex;
    margin: 0;
    margin-bottom: 1.45rem;
    padding: 16px;

    a {
      color: inherit;
    }

    .link-list > * {
      padding: 0 8px;
    }
  `,
];

export const Header: FC<Types> = ({ siteTitle = process.env.SITE_TITLE }) => (
  <div css={style}>
    <h1 style={{ flex: 1, margin: 0 }}>
      <Link href="/">{siteTitle}</Link>
    </h1>
    <div className="link-list">
      <Link href="https://linkedin.com/in/skoshy">LinkedIn</Link>
      <Link href="https://twitter.com/stekoshy">Twitter</Link>
      <Link href="https://github.com/skoshy">GitHub</Link>
    </div>
  </div>
);
