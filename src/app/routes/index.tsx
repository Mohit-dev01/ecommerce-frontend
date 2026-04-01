// src/app/routes/index.tsx

import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import LoginPage from "../../features/auth/pages/LoginPage";
import RegisterPage from "../../features/auth/pages/RegisterPage";
import { AdminGuard } from "../../features/auth/components/AdminGuard";
import { HomePage } from "../../HomePage";
import { AdminPage } from "../AdminPage";
import ProductDetailPage from "../../features/products/pages/ProductDetailPage";
import ProductListPage from "../../features/products/pages/ProductListPage";
import AdminCreateProductPage from "../../features/admin/products/pages/AdminCreateProductPage";
import AdminProductListPage from "../../features/admin/products/pages/AdminProductListPage";
import AdminCategoryPage from "../../features/admin/categories/pages/AdminCategoryPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/admin",
        element: (
          <AdminGuard>
            <AdminPage />
          </AdminGuard>
        ),
      },
    ],
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
    path: "/",
    element: <ProductListPage />,
  },
  {
    path: "/products/:slug",
    element: <ProductDetailPage />,
  },
  {
    path: "/admin/products",
    element: <AdminProductListPage />,
  },
  {
    path: "/admin/products/new",
    element: <AdminCreateProductPage />,
  },
  {
    path: "/admin/categories",
    element: (
      <AdminGuard>
        <AdminCategoryPage />
      </AdminGuard>
    ),
  },
]);
