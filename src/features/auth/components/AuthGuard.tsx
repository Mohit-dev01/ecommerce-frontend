import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../../app/store/auth-store";

type Props = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: Props) {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
