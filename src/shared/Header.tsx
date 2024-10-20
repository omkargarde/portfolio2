import { link } from "fs";
import ExternalLink from "./links/ExternalLink";

const Header = () => {
  const links = [
    {
      link: "/blog",
      label: "/Blog",
    },
    {
      link: "/Projects",
      label: "/Projects",
    },
  ];
  return (
    <header className="">
      <nav className="">
        <ul className="flex p-10">
          <li className="-rotate-6 text-2xl text-neutral-100">Omkar Garde</li>
          <div className="flex-1"></div>
          {links.map((link) => {
            return (
              <li key={link.link} className="px-2">
                <ExternalLink href={link.link}>{link.label}</ExternalLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
