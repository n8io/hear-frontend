import { commentToHtml } from '.';

describe('commentToHtml', () => {
  test('converts encoded chars to the expected values', () => {
    const encoded = '&lt;&gt;&amp;\n&quot;';

    expect(commentToHtml(encoded)).toEqual('<>&<br/>"');
  });
});
