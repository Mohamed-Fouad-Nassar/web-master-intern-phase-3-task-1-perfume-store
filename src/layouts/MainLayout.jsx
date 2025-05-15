import { Outlet } from "react-router";

import Header from "../ui/Header";
import Footer from "../ui/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
