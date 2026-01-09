import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const AuthPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      login({ id: data.user.id, name: data.user.name, email: data.user.email, token: data.token });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl flex flex-col gap-4 w-80"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="p-2 rounded bg-cyan-500 font-semibold hover:bg-cyan-400 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
