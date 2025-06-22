import LoginPagesComponen from "@/component/Pages/auth/login/pagesLogin";
import DashboardPages from "@/component/Pages/dashboard/dashboard";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Dashboard",
    description:"Ini Halaman Dashboard"
}

export default function Dashboard(){
    return (
       <DashboardPages/>
    )
}