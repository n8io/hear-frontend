import { PageTitle } from 'components/PageTitle';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const onBackClick = () => history.goBack();

  return (
    <>
      <PageTitle title="Not Found" />
      <br />
      <p>
        <Link onClick={onBackClick} to={'#'}>
          Go Back
        </Link>
      </p>
    </>
  );
};

export { NotFound };
