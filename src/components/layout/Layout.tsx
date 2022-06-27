import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ title = "Pokemon Sales", children }: Props) => {
  return (
    <>
      {/* <head>
        <title>{title}</title>
      </head> */}
      <Header />
      <main>
        <div className="children">{children}</div>
      </main>
      <br />
      <Footer />
    </>
  );
};
export default Layout;
