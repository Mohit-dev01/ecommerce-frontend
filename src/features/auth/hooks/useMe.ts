import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/me";
import { getAccessToken } from "../../../app/store/auth-store";

export function useMe() {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: getMe,
    enabled: !!getAccessToken(),
    retry: false,
  });
}
