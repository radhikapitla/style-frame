import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://style-frame-1i9s.onrender.com/api/admin/login",
        { username, password,}
      );

      if (res.data.success) {
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem(
    "admin",
    JSON.stringify(res.data.admin)
    );
    window.location.href = "/admin/dashboard";}

    } catch (err: any) {
      console.error(err);
      if (err.response) {
      } else {
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-cyan-400">
          Admin Login </h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-white">Username</label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white outline-none focus:border-cyan-400"/>                          
          </div>
          <div>
            <label className="mb-2 block text-white">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white outline-none focus:border-cyan-400"/>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-3 text-lg font-semibold text-white transition hover:bg-cyan-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
