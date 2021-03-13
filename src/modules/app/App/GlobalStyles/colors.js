const { css } = require('styled-components');

const palette = [
  { key: 'white', value: '#fff' },
  { key: 'gray-100', value: '#f9f9f9' },
  { key: 'gray-200', value: '#eaeaea' },
  { key: 'gray-300', value: '#dcdcdc' },
  { key: 'gray-400', value: '#cacaca' },
  { key: 'gray-500', value: '#b1b1b1' },
  { key: 'gray-600', value: '#8e8e8e' },
  { key: 'gray-700', value: '#5a5a5a' },
  { key: 'black', value: '#000' },
  { key: 'blue-300', value: '#3fa6ef' },
  { key: 'orange-400', value: '#fca841' },
];

const toCssVariable = ({ key, value }) => `--color-${key}: ${value};\n`;

const colors = css`
  ${palette.map(toCssVariable)}
`;

export { colors };
