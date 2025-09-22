// app/signin/page.tsx
import React from "react";
import Link from "next/link";
import icon from "../../../../public/icons8-google-48.png";
const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Левая колонка с фоном */}
      <div className="hidden lg:flex w-1/2 bg-green-700 items-center justify-center">
        <div className="text-white p-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg">
            Sign in to access your dashboard and manage your projects.
          </p>
        </div>
      </div>

      {/* Правая колонка с формой */}
      <div className="flex flex-1 items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-extrabold text-green-700 text-center">
            Sign In
          </h2>
          <form className="mt-6 space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-700 border-gray-300 rounded focus:ring-green-700"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-green-700 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-green-700 hover:bg-green-800 text-white rounded-xl font-semibold text-lg shadow-md transition-colors duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Разделитель */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Вход через Google */}
          <button
            type="button"
            className="w-full py-3 text-black gap-1 flex items-center justify-center border border-gray-300 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-200"
          >
            <img src={icon.src} alt="" className="w-6" />
            Sign in with Google
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/auth/signUp"
              className="text-green-700 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
