import React from 'react';
import { isDev } from 'src/utils/constants';
import { FC } from 'src/utils/types';

export const Analytics: FC = () => {
  if (isDev) return null;

  return (
    <>
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `var _tcfg=_tcfg||[];!function(){_tcfg.push(["tags",""]);_tcfg.push(["account_id",3357526]);var t=document,e=t.createElement("script"),s=t.getElementsByTagName("script")[0];e.type="text/javascript",e.async=!0,e.src="https://cdn.ticksel.com/js/analytics_v1.0.js",e.setAttribute("crossorigin","anonymous"),e.setAttribute("integrity","sha256-7grd8jMivCG0iCcJ7m/Ny4gvWb0mPVpFhRQovLkaUl8="),s.parentNode.insertBefore(e,s)}();`,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img src="https://beacon.ticksel.com/beam?account_id=3357526&referrer=&tags=" style="border:0;" width="0" height="0" alt="" />`,
        }}
      />
    </>
  );
};
