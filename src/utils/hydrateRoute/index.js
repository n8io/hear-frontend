const hydrateRoute = (maskedPath = '', params = {}) =>
  Object.keys(params)
    .sort((a, b) => b.length - a.length)
    .reduce((acc, param) => {
      const regEx = new RegExp(`(:${param})`, 'gu');
      const value = params[param] ?? '';

      return acc.replace(regEx, value);
    }, `${maskedPath}`);

export { hydrateRoute };
