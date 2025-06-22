"use client"

import Mainlayout from "@/component/Layout/layout";
import { Pengguna } from "@/interface/userInterface";
import axios from "axios";
import { useEffect, useState } from "react";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function PenggunaPages(){
    //Kita Coba Ambil Data Dari API Backend dengan Token Yang di simpan Pada cookies
    const [dataPeengguna, setDataPengguna] = useState<Pengguna>()
    const [tokenAkses, setToken] = useState<string>("")
    const baseUrlBackend = process.env.NEXT_PUBLIC_BACKEND_URL;
    const router = useRouter()

    //hook use efect 
    useEffect(()=>{
        //Kita Akana Mengambil Token Terlebih Dahulu 
        const tokenCookies = getCookie("token_auth")
        //Cek jika Token nya ini Abis / Tidak Berlaku
        if (!tokenCookies){
            router.push("/auth/login")
            return
        }
        const realToken = tokenCookies.toString()
        setToken(realToken)
        GetDataUsers(realToken)

    },[])
    const GetDataUsers = async(token:string)=>{
        try{
            console.log(token)
            const response = await axios.get(`${baseUrlBackend}/pelangganById`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            //beRHASIL gET 
            const dataUsers = response.data.data
            setDataPengguna(dataUsers)

        }catch{

        }
    }
    return (
       <Mainlayout>
        <>
           <div className="text-black">
                Nama {dataPeengguna?.nama}
            </div>
            <div className="text-black">
                Email {dataPeengguna?.email}
            </div>
            <div className="text-black">
                No Telpom {dataPeengguna?.no_telpo}
            </div>
            <div className="text-black">
                No Pelanggan {dataPeengguna?.nomor_pelanggan}
            </div>
        </>

       </Mainlayout>
    )
}