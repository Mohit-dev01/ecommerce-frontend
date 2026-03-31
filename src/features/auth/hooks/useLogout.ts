import { useNavigate } from "react-router-dom";
import { clearAccessToken } from "../../../app/store/auth-store";
import { useQueryClient } from "@tanstack/react-query";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    clearAccessToken();

    // clear all cached data
    queryClient.clear();

    navigate("/login");
  };
}
