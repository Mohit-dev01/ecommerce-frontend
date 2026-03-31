import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import { AdminGuard } from "../../features/auth/components/AdminGuard";
import { HomePage } from "../../HomePage";
import { AdminPage } from "../AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: (
      <AdminGuard>
        <AdminPage />
      </AdminGuard>
    ),
  },
]);
