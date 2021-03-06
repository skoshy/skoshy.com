import { createGlobalStyle, css } from 'styled-components';

const colors = {
  base: 'hsl(0, 0%, 15%)',
  baseContrast: 'hsl(200, 12%, 95%)',
  link: 'hsl(219, 83%, 53%)',
};

const CSSReset = css`
  /*! SK's CSS Reset, modified from minireset.css v0.0.5 | MIT License | github.com/jgthms/minireset.css */
  /*
    A tiny modern CSS reset that covers the basics:

    - resets the font sizes: so that using semantic markup doesn't affect the styling
    - resets the block margins: so that the spacing is only applied when you need it
    - resets tables: so that tabular data only takes the space it needs
    - preserves the inline paddings: so that buttons and inputs keep their default layout
    - sets the border-box box sizing: so that borders and paddings don't affect the set dimensions
    - sets responsive media elements: so that images and embeds scale with the browser width
  */

  :root {
    --main-font-family: 'Archivo', 'Arial', sans-serif;
    --monospace-font-family: monospace;
  }

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

  a {
    color: ${colors.link};
  }
  a:hover {
    color: ;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
    color: ${colors.base};
    font-size: 16px;
    line-height: 1.25;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    color: inherit;
    font-family: var(--main-font-family);
    line-height: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 1px solid black;
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

const MyStyles = css`
  fieldset {
    padding: 1rem 1rem 0;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  ol,
  ul,
  dd,
  dl,
  hr,
  fieldset,
  table,
  pre,
  figure,
  audio,
  video,
  canvas,
  meter,
  progress,
  iframe,
  svg {
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  textarea,
  pre,
  code,
  kbd,
  samp {
    font-family: var(--monospace-font-family);
  }

  ol,
  ul {
    padding-left: 1.25rem;
  }

  ul ul {
    list-style-type: disc;
    margin-bottom: 0;
  }

  li {
    padding-left: 0.25rem;
  }

  p {
    font-size: 1rem;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
  }

  blockquote {
    border-left: 1px solid ${colors.baseContrast};
    margin-left: 0.5rem;
    padding-left: 0.5rem;
  }

  td,
  th {
    border: 1px solid ${colors.baseContrast};
    padding: 0.5rem;
  }

  caption,
  th {
    background: ${colors.baseContrast};
    border: 1px solid ${colors.baseContrast};
    padding: 0.5rem;
  }

  figure {
    background: ${colors.baseContrast};
    display: inline-block;
    padding: 1rem;
  }

  figcaption {
    font-style: italic;
    padding-top: 1rem;
  }
`;

export const GlobalStyleAsCss = css`
  ${CSSReset}
  ${MyStyles}
`;

export const GlobalStyle = createGlobalStyle`
  ${GlobalStyleAsCss}
`;
