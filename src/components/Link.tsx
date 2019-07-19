import React from 'react';
import { css } from 'styled-components';
import NextLink from 'next/link';
import { FC } from 'src/utils/types';

const internalLinkRegex = /^\/(?!\/)/;

interface Types {
  children: JSX.Element;
  to: string;
}

export const Link: FC<Types> = ({ children, to, ...other }) => {
  const isInternal = internalLinkRegex.test(to);

  return (
    <div
      css={css`
        color: white;
        font-size: 1em;
        text-decoration: none;
      `}
    >
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
