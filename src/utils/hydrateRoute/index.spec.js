import { hydrateRoute } from '.';

describe('hydrateRoute', () => {
  describe('when given a masked path', () => {
    const maskedPath =
      '/pathname/:param?:paramName=:param&emptyParam=:emptyParam#:param';

    describe('and params', () => {
      const param = 'PARAM';
      const paramName = 'PARAM_NAME';
      const params = { emptyParam: null, param, paramName };

      test('returns a hydrated url', () => {
        expect(hydrateRoute(maskedPath, params)).toEqual(
          `/pathname/${param}?${paramName}=${param}&emptyParam=#${param}`
        );
      });
    });
  });

  describe('when NOT given a masked path', () => {
    const maskedPath = undefined;

    describe('and params', () => {
      const param = 'PARAM';
      const paramName = 'PARAM_NAME';
      const params = { emptyParam: null, param, paramName };

      test('returns a hydrated url', () => {
        expect(hydrateRoute(maskedPath, params)).toEqual('');
      });
    });
  });

  describe('when NOT given any params', () => {
    const maskedPath = '/:param';

    describe('and params', () => {
      const params = undefined;

      test('returns a hydrated url', () => {
        expect(hydrateRoute(maskedPath, params)).toEqual(maskedPath);
      });
    });
  });
});
