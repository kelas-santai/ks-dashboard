import LoginPagesComponen from "@/component/Pages/auth/login/pagesLogin";
import RegisterPagesComponen from "@/component/Pages/auth/register/registerPages";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Halaman Login",
    description:"Ini Halaman Login"
}

export default function LoginPages(){
    return (
       <RegisterPagesComponen/>
    )
}