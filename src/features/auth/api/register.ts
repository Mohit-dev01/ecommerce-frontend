import { api } from "../../../lib/api-client";
import type { ApiResponse, AuthResponse } from "../types/auth.types";

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export async function register(payload: RegisterPayload) {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/auth/register",
    payload,
  );
  return response.data;
}
