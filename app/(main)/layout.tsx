import React, { PropsWithChildren } from "react";
import Header from "../components/header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-pr min-h-screen pb-20">
      <div className="container lg:max-w-screen-lg  lg:mx-auto">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default MainLayout;
