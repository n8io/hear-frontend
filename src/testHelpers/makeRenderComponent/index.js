import { render } from '@testing-library/react';

const makeRenderComponent = ({ component: Component, defaultProps }) => (
  overrides
) => {
  const { container, ...rest } = render(
    <Component {...defaultProps} {...overrides} />
  );

  const { firstChild } = container;

  return {
    container,
    firstChild,
    ...rest,
  };
};

export { makeRenderComponent };
