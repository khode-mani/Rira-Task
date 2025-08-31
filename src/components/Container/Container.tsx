import { ReactNode } from "react";

interface IContainer {
  children : ReactNode,
  className?: string
}


function Container({children , className} : IContainer) {
  return (
    <div className={`w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
