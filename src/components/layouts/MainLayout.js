import Menu from "../Menu";
import Head from "next/head";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Menu />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
