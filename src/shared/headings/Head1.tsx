import React from "react";

const Head1 = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <h1 className="text-balance py-4 text-5xl capitalize text-neutral-200 md:text-4xl">
      {children}
    </h1>
  );
};

export default Head1;
