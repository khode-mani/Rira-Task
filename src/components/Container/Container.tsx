import { ReactNode } from "react";

function Container({children} : {children : ReactNode}) {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
      {children}
    </div>
  );
}

export default Container;
