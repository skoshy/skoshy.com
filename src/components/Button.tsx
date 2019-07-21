import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { css } from 'styled-components';
import NextLink from 'next/link';
import { FC } from 'src/utils/types';
import { mainLinkStyle } from 'src/themes/styles';

interface Types
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href: string;
}

export const Button: FC<Types> = ({ children, href, ...props }) => {
  const style = {
    button: css`
      background: none;
      padding: 5px;
    `,
  };

  return (
    <NextLink href={href}>
      <button css={[mainLinkStyle, style.button]} {...props}>
        {children}
      </button>
    </NextLink>
  );
};
