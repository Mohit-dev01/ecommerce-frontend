import { Navigate } from "react-router-dom";
import { useMe } from "../hooks/useMe";

type Props = {
  children: React.ReactNode;
};

export function AdminGuard({ children }: Props) {
  const { data, isLoading, isError } = useMe();

  if (isLoading) {
    return <div className="p-6">Checking access...</div>;
  }

  if (isError || !data?.data) {
    return <Navigate to="/login" replace />;
  }

  if (data.data.role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
