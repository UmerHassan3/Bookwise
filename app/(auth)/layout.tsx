import React, { ReactNode } from "react"
import Image from "next/image"
import authimg from "../../public/images/authimg.jpg"
import { auth } from "@/auth";
import { redirect } from "next/navigation";


const AuthLayout = async({ children }: { children: ReactNode }) => {
    const session = await auth();
    if(session){
        redirect("/")
    }
    return (
        <div className="min-h-screen flex flex-col md:flex-row">

            {/* IMAGE (TOP on mobile, LEFT on desktop) */}
            <div className="relative w-full h-56 md:h-auto md:w-1/2">
                <Image
                    src={authimg}
                    alt="Auth Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* FORM (BOTTOM on mobile, RIGHT on desktop) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-50">
                <div className="w-full max-w-md">
                    {children}
                    
                </div>
            </div>

        </div>
    )
}

export default AuthLayout