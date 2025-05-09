import { Outlet } from "react-router";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
