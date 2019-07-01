import Typography from 'typography';
import bootstrapTheme from 'typography-theme-bootstrap';

const typography = new Typography({
  ...bootstrapTheme,
  ...{ baseFontSize: '16px' },
});

export default typography;
