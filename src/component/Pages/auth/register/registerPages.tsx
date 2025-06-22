"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPagesComponen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [noTelpon, setNotelpon] = useState<number>(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrlBackend = process.env.NEXT_PUBLIC_BACKEND_URL;
  const route = useRouter();

  const LoginHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("Nama", nama);
    data.append("Password", password);
    data.append("Email", email);
    data.append("NoTelpo", noTelpon.toString());

    try {
      const response = await axios.post(
        `${baseUrlBackend}/createPelanggan`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Pendaftaran berhasil! Anda akan diarahkan ke login...");
      setErrorMessage(""); // Clear error message

      // Redirect ke login setelah 2 detik
      setTimeout(() => {
        route.push("/auth/login");
      }, 2000);
    } catch (err: any) {
      setSuccessMessage(""); // Clear success message

      const errMsg = err?.response?.data?.message || "Gagal mendaftar. Coba lagi.";
      setErrorMessage(errMsg);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 bg-green-100 text-green-700 border border-green-400 px-4 py-2 rounded">
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 bg-red-100 text-red-700 border border-red-400 px-4 py-2 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={LoginHandler}>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 text-black py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">Nama</label>
            <input
              type="text"
              placeholder="Masukkan Nama"
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              No Telpon
            </label>
            <input
              type="number"
              placeholder="Masukkan No Telpon"
              onChange={(e) => setNotelpon(Number(e.target.value))}
              className="w-full px-4 py-2 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPagesComponen;
