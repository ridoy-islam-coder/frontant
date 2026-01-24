import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e11] text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-4 text-white/90">404</h1>

        <p className="text-lg font-medium mb-2">
          Page not found
        </p>

        <p className="text-sm text-gray-400 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}