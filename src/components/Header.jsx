import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Search Hacker News</h1>
      </Link>
    </header>
  );
};

export default Header;
