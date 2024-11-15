"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response?.error) {
      console.log(response);
      setError(response.error);
    } else if (response?.ok) {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
}
