import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="">
      <nav className="">
        <ul className="flex p-10">
          <Link to="/" className="-rotate-6 text-2xl text-neutral-100">
            Omkar Garde
          </Link>
          <div className="flex-1"></div>
          <Link to="/about" className="capitalize">
            blogs
          </Link>
          <Link to="/about" className="capitalize">projects</Link>
          <Link to="/about" className="capitalize">work </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
