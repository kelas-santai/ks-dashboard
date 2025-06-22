"use client";

import ButtonTesting from "@/component/button/CountButton";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { setCookie } from "cookies-next";

const LoginPagesComponen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrlBackend = process.env.NEXT_PUBLIC_BACKEND_URL;
  const route = useRouter();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const LoginHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("Email", email);
    data.append("Password", password);

    try {
      const response = await axios.post(
        `${baseUrlBackend}/loginPelanggan`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Berhasil login Anda akan diarahkan ke dashboard...");
      setErrorMessage(""); // Clear error message
      console.log("response dari API", response.data);
      console.log("Mengambil Token", response.data.t);

      //Token yang berhasil di ambil
      const token = response.data.t;
      setCookie("token_auth", token, {
        expires: new Date(Date.now() + 8 * 60 * 60 * 1000), 
        path:'/'
      });

      // Redirect ke login setelah 2 detik
      setTimeout(() => {
        route.push("/dashboard");;
      }, 2000);
    } catch (err: any) {
      setSuccessMessage(""); // Clear success message

      const errMsg =
        err?.response?.data?.message || "Gagal mendaftar. Coba lagi.";
      setErrorMessage(errMsg);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Auto Deploy Fix
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
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Belum punya akun?
          <Link
            href="/auth/register"
            className="ml-1 text-blue-600 hover:underline"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPagesComponen;
