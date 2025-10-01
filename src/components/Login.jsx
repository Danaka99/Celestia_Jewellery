import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900 p-8 shadow-xl border border-neutral-800">
        <h2 className="text-center text-3xl font-bold text-white mb-6">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-white py-2 font-semibold text-black shadow-md transition-all hover:scale-105 hover:bg-gray-200"
          >
            Login
          </button>
        </form>

        {/* Create Account Option */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-semibold text-white hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
