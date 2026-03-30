import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  { path: "/admin", element: <div>Admin</div> },
]);
