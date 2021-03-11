import { colors, images, random } from '.';

const regEx = /^https[:]\/\/www[.]redditstatic[.]com\/avatars\/avatar_default[_]([0-9]{2})[_]([A-G0-9]{6})[.]png$/iu;

describe('profileImage', () => {
  describe('random', () => {
    test('returns a hydrated url', () => {
      const actual = random();

      expect(actual).toMatch(regEx);
    });

    test('returns valid color and image', () => {
      const actual = random();
      const [, imageIndex, colorIndex] = actual.match(regEx);

      expect(images[parseInt(imageIndex)]).not.toBeNull();
      expect(colors[parseInt(colorIndex)]).not.toBeNull();
    });
  });
});
