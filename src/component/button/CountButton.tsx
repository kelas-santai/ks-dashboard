'use client'

import { useEffect, useState } from "react"

interface props {
    nameButton:string
}

const ButtonTesting = ({nameButton}:props)=>{

    const [count, setCount] = useState<number>(0)
    const HandlerKlik = ()=>{
        setCount(count +1)
    }
    //untuk Hooks
    useEffect(()=>{
        //Kasih Semua login yang berjalanAmbil Data Dll
        setCount(count+1)
        console.log(count)

    }, [])


    return (
        <div>
            <button onClick={HandlerKlik} className="bg-green-200 text-black">{nameButton}</button>
            <p>Sudah di klik sebanyak {count}</p>
        </div>
    )

}


export default ButtonTesting