const { css } = require('styled-components');

const palette = [
  { key: 'white', value: '#fff' },
  { key: 'gray-100', value: '#f9f9f9' },
  { key: 'gray-300', value: '#dcdcdc' },
  { key: 'gray-400', value: '#cacaca' },
  { key: 'gray-500', value: '#b1b1b1' },
  { key: 'black', value: '#000' },
];

const toCssVariable = ({ key, value }) => `--color-${key}: ${value};\n`;

const colors = css`
  ${palette.map(toCssVariable)}
`;

export { colors };
