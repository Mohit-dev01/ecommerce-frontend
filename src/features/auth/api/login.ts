import { api } from "../../../lib/api-client";
import type { ApiResponse, AuthResponse } from "../types/auth.types";

export type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/auth/login",
    payload,
  );
  return response.data;
}
