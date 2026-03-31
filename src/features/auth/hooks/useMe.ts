import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/me";
import { getAccessToken } from "../../../app/store/auth-store";
import { queryKeys } from "../../../lib/query-keys";

export function useMe() {
  return useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: getMe,
    enabled: !!getAccessToken(),
    retry: false,
  });
}
