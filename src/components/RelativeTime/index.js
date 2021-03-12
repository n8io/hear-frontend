import { formatDistanceToNow } from 'date-fns';
import { number } from 'prop-types';

const RelativeTime = ({ secondsSinceEpoch }) => {
  const thenDate = new Date();

  thenDate.setTime(secondsSinceEpoch * 1000);

  return <span>{formatDistanceToNow(thenDate, { addSuffix: true })}</span>;
};

RelativeTime.propTypes = {
  secondsSinceEpoch: number.isRequired,
};

export { RelativeTime };
