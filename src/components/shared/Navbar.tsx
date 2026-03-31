import { Link } from "react-router-dom";
import { useMe } from "../../features/auth/hooks/useMe";
import { useLogout } from "../../features/auth/hooks/useLogout";

export function Navbar() {
  const { data, isLoading } = useMe();
  const logout = useLogout();

  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Link to="/" className="text-xl font-bold">
        E-Commerce
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>

        {isLoading ? (
          <span>Loading...</span>
        ) : data?.data ? (
          <>
            <span className="text-sm">Hi, {data.data.name}</span>

            {data.data.role === "ADMIN" && (
              <Link to="/admin" className="font-medium">
                Admin
              </Link>
            )}

            <button
              onClick={logout}
              className="rounded bg-black px-3 py-1 text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
