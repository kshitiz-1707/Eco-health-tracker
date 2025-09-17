import React, { useState } from "react";

export default function SignupPage({ onBack, onSwitch, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess({ name, email });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Sign Up</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
            required
          />
          <input type="password" placeholder="Password" className="p-2 border rounded" required />
          <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Create Account
          </button>
        </form>

        <button onClick={onSwitch} className="mt-4 text-blue-600 underline text-sm">
          Already have an account? Login
        </button>
        <button onClick={onBack} className="mt-2 w-full py-2 bg-gray-200 rounded">
          Back
        </button>
      </div>
    </div>
  );
}
