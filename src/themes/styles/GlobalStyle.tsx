import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /*! minireset.css v0.0.5 | MIT License | github.com/jgthms/minireset.css */
  /*
    A tiny modern CSS reset that covers the basics:

    - resets the font sizes: so that using semantic markup doesn't affect the styling
    - resets the block margins: so that the spacing is only applied when you need it
    - resets tables: so that tabular data only takes the space it needs
    - preserves the inline paddings: so that buttons and inputs keep their default layout
    - sets the border-box box sizing: so that borders and paddings don't affect the set dimensions
    - sets responsive media elements: so that images and embeds scale with the browser width
  */

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
`;
