const { css } = require('styled-components');

const palette = [
  { key: 'white', value: '#fff' },
  { key: 'gray-100', value: '#f9f9f9' },
  { key: 'gray-300', value: '#dcdcdc' },
  { key: 'black', value: '#000' },
];

const toCssVariable = ({ key, value }) => `--color-${key}: ${value};\n`;

const colors = css`
  ${palette.map(toCssVariable)}
`;

export { colors };
