import { api } from "../../../lib/api-client";
import type { ApiResponse, AuthUser } from "../types/auth.types";

export async function getMe() {
  const response = await api.get<ApiResponse<AuthUser>>("/auth/me");
  return response.data;
}
