import Link from "next/link";
import React from "react";
import type { UrlObject } from "url";

type Url = string | UrlObject;

const StyledLinkWithPrefetch = ({
  href,
  children,
  prefetch,
}: Readonly<{ href: Url; children: React.ReactNode; prefetch: boolean }>) => {
  return (
    <Link href={href} prefetch={prefetch}>
      {children}
    </Link>
  );
};

export default StyledLinkWithPrefetch;
