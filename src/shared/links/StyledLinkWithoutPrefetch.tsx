import Link from "next/link";
import React from "react";
import type { UrlObject } from "url";

type Url = string | UrlObject;

const StyledLinkWithoutPrefetch = ({
  href,
  children,
}: Readonly<{ href: Url; children: React.ReactNode }>) => {
  return (
    <Link href={href} prefetch={false}>
      {children}
    </Link>
  );
};

export default StyledLinkWithoutPrefetch;
