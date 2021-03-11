import { PageTitle } from 'components/PageTitle';
const { route } = require('constants/route');
const { Link } = require('react-router-dom');

const NotFound = () => (
  <>
    <PageTitle title="Not Found" />
    <Link to={route.ROOT}>Home</Link>
  </>
);

export { NotFound };
