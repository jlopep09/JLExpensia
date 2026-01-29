// layouts/MainLayout.jsx
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex flex-col justify-between min-h-lvh items-center w-full">
      <div className="w-full items-center flex flex-col">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
