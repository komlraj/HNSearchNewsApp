import { Link } from 'react-router-dom';
import { searchHackersNewsText } from '../constants';

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
        <h1>{searchHackersNewsText}</h1>
      </Link>
    </header>
  );
};

export default Header;
