import LoginPagesComponen from "@/component/Pages/auth/login/pagesLogin";
import DashboardPages from "@/component/Pages/dashboard/dashboard";
import PenggunaPages from "@/component/Pages/pengguna/pengguna";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Pengguna",
    description:"Ini Halaman Pengguna"
}

export default function Pengguna(){
    return (
       <PenggunaPages />
    )
}