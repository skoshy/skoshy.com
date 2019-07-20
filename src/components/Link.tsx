import React from 'react';
import { css } from 'styled-components';
import NextLink from 'next/link';
import { FC } from 'src/utils/types';

interface Types {
  to: string;
}

const style = css`
  color: white;
  font-size: 1em;
  text-decoration: none;
`;

export const Link: FC<Types> = ({ children, to, ...other }) => {
  const isInternal = /^\/(?!\/)/.test(to);

  return (
    <div css={style}>
      {isInternal ? (
        <NextLink href={to} {...other}>
          {children}
        </NextLink>
      ) : (
        <a href={to} {...other}>
          {children}
        </a>
      )}
    </div>
  );
};
