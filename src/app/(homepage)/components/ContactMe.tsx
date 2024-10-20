import Head2 from "@/shared/headings/Head2";
import ExternalLink from "@/shared/links/ExternalLink";

const links = [
  {
    href: "https://x.com/omkargarde6",
    label: "Twitter/X",
  },
  {
    href: "https://github.com/omkargarde",
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/omkar-garde-a2a8a5191/",
    label: "LinkedIn",
  },
  {
    href: "mailto:gardeomkar13@gmail.com",
    label: "Send me a mail",
  },
];

const ContactMe = () => {
  return (
    <section>
      <Head2>Connect with me at</Head2>
      <ul className="flex space-x-2">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ContactMe;
