import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { css } from 'styled-components';
import NextLink from 'next/link';
import { FC } from 'src/utils/types';
import { mainLinkStyle } from 'src/themes/styles';

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
      <a css={[mainLinkStyle, style]} {...props}>
        {children}
      </a>
    </NextLink>
  );
};
