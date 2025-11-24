import React, { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface LayoutProps {
  children: ReactNode;
  hideLayout?: boolean;
}

const Layout = ({ children, hideLayout }: LayoutProps) => {
  if (hideLayout) {
    return <>{children}</>; // render children without layout wrapper
  }
  return (
    <div className="layout-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  ); // render with layout
};

export default Layout;
