import React from 'react';
import styled from 'styled-components';

export const Paragraph = styled.p``;

export const Heading = styled(
  ({ type = 'h3', children, ...props }): JSX.Element => {
    const Tag = type;
    return <Tag {...props}>{children}</Tag>;
  }
)``;

export const Div = styled.div``;
