"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()
    return (
<div className="min-h-screen max-w-xl mx-auto flex justify-center items-center"> 
    <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-accent "/>
        <h3 className="text-accent text-4xl font-bold">NOT FOUND</h3>
        <button onClick={() => router.back()} className="text-primary hover:text-accent transition-all underline">Kembali</button>
    </div>
</div>
    )
}

export default NotFound