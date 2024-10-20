import React from "react";

const Head2 = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <h2 className="text-balance py-2 text-3xl capitalize text-neutral-200 md:text-2xl">
      {children}
    </h2>
  );
};

export default Head2;
