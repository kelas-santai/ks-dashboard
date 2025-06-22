import LoginPagesComponen from "@/component/Pages/auth/login/pagesLogin";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Halaman Login",
    description:"Ini Halaman Login"
}

export default function LoginPages(){
    return (
       <LoginPagesComponen/>
    )
}