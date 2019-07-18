/* eslint-disable no-restricted-imports, @typescript-eslint/no-explicit-any */
import { FunctionComponent as ReactFunctionComponent } from 'react';

// We're disabling props type-checking with TypeScript because we're using PropTypes instead,
// and we use ESLint to check types at compile/static time
export type FunctionComponent = ReactFunctionComponent<any>;
