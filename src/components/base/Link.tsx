import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { css } from 'styled-components';
import NextLink from 'next/link';
import { FC } from 'src/utils/types';

interface Types
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

export const Link: FC<Types> = ({ children, href, ...props }) => {
  const style = [
    css`
      text-decoration: none;

      :hover {
        cursor: pointer;
      }
    `,
  ];

  return (
    <NextLink href={href}>
      <a href={href} css={[style]} {...props}>
        {children}
      </a>
    </NextLink>
  );
};
