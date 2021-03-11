import { Logo } from 'components/Logo';
import { route } from 'constants/route';
import { useSnood } from 'hooks/useSnood';
import { Link } from 'react-router-dom';

const Header = () => {
  const snood = useSnood();

  return (
    <header>
      <Link to={route.ROOT}>
        <img height={32} src={snood} width={32} />
        <Logo height={18} />
      </Link>
    </header>
  );
};

export { Header };
