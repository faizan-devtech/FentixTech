 import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      let data;

      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      setToken(data.token);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8 border border-gray-100">

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#1A1160] rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
            A
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            Admin Portal
          </h2>

          <p className="text-gray-500 mt-2">
            Secure dashboard access
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              required
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1A1160]"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              required
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#1A1160]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-gray-400"
                : "bg-[#1A1160] hover:bg-[#120c48]"
            }`}
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}