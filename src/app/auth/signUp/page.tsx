// app/signup/page.tsx
import Link from "next/link";
import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Правая колонка с формой */}
      <div className="flex flex-1 items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-extrabold text-green-700 text-center">
            Sign Up
          </h2>
          <form className="mt-6 space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-green-700 hover:bg-green-800 text-white rounded-xl font-semibold text-lg shadow-md transition-colors duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/signIn"
              className="text-green-700 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      {/* Левая колонка с фоном */}
      <div className="hidden lg:flex w-1/2 bg-green-700 items-center justify-center">
        <div className="text-white p-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Us!</h1>
          <p className="text-lg">
            Create your account to get started and manage your projects
            effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
