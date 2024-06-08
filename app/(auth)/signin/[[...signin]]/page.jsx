import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader, Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return(
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-4xl mb-10">Sign In</h1>
                    <div className="flex items-center justify-center">
                        <ClerkLoaded>
                            <SignIn />
                        </ClerkLoaded>
                        <ClerkLoading>
                            <Loader2 className="animate-spin text-muted-foreground" size={80}></Loader2>
                        </ClerkLoading>
                    </div>
                </div>
            </div>
            <div className="h-full bg-gradient-to-r from-blue-950 to-blue-500 hidden lg:flex items-center justify-center">
                <Image src="/logoipsum-254.svg" height={400} width={400} alt="Logo" />
            </div>
        </div>
    ); 
}