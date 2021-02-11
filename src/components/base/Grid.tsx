import React from 'react';
import { Grid as GrommetGrid } from 'grommet';

export const Grid = ({ className, children, ...props }) => (
  <div className={`grid ${className}`} {...props}>
    {children}
  </div>
);
