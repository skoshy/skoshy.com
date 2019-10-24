import React from 'react';
import Head from 'next/head';
import { isDev } from 'src/utils/constants';

export const Analytics = () => {
  if (isDev) return null;

  return (
    <>
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
            var _tcfg = _tcfg || [];
            (function() {
              _tcfg.push(["tags", ""]);
              var u="https://cdn.ticksel.com/js/analytics_v1.0.js"; _tcfg.push(["account_id", 3357526]);
              var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];
              g.type="text/javascript"; g.async=true; g.src=u; g.setAttribute("crossorigin", "anonymous");
              g.setAttribute("integrity", "sha256-7grd8jMivCG0iCcJ7m/Ny4gvWb0mPVpFhRQovLkaUl8=");
              s.parentNode.insertBefore(g,s);
            })();
          `,
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
