import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/shared/Navbar";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
