import React, { AnchorHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';
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

  const anchor = useMemo(
    () => (
      <a href={href} css={[style]} {...props}>
        {children}
      </a>
    ),
    []
  );

  const isExternalLink =
    href.startsWith('http://') || href.startsWith('https://');

  return isExternalLink ? anchor : <NextLink href={href}>{anchor}</NextLink>;
};
