import React from "react";

const ExternalLink = ({
  href,
  children,
}: Readonly<{ href: string; children: React.ReactNode }>) => {
  return (
    <a
      href={href}
      target="_black"
      className="text-xl capitalize text-neutral-300 underline underline-offset-2 transition-all ease-linear hover:text-neutral-100 md:text-lg"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
