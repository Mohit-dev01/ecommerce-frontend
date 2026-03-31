import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { setAccessToken } from "../../../app/store/auth-store";

export default function RegisterPage() {
  const navigate = useNavigate();
  const registerMutation = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await registerMutation.mutateAsync({
        name,
        email,
        password,
      });

      setAccessToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mx-auto mt-20 max-w-md rounded-xl border p-6 shadow">
      <h1 className="mb-6 text-2xl font-semibold">Register</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full rounded border p-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full rounded bg-black p-3 text-white disabled:opacity-60"
          type="submit"
          disabled={registerMutation.isPending}
        >
          {registerMutation.isPending ? "Creating account..." : "Register"}
        </button>
      </form>

      {registerMutation.isError && (
        <p className="mt-4 text-sm text-red-600">Registration failed</p>
      )}
    </div>
  );
}
