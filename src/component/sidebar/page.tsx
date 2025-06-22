import { Home, User, Settings, LogOut } from "lucide-react";
import Link from "next/link"; // Jika pakai Next.js

export default function SideBar() {
  return (
    <aside className="hidden lg:flex flex-col w-80 h-screen fixed bg-slate-100 text-gray-800 border-r border-gray-300 p-4">
      {/* Logo / Header */}
      <div className="mb-8 flex items-center gap-2 px-2">
        {/* Bisa ganti ke <img src="/logo.png" /> */}
        <span className="text-2xl font-extrabold text-black">My App</span>
      </div>

      {/* Menu utama */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 transition">
              <Home size={20} /> Dashboard
            </Link>
          </li>

          <li>
            <Link href="/pengguna" className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 transition">
              <User size={20} /> Pengguna
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 transition">
              <Settings size={20} /> Pengaturan
            </Link>
          </li>
        </ul>

        <div className="divider my-4" />
        
        {/* Menu tambahan */}
        <ul>
          <li>
            <Link href="/" className="flex items-center gap-3 p-3 rounded-md text-red-600 hover:bg-red-100 transition">
              <LogOut size={20} /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
