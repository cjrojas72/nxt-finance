import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
    return(
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-1">
            <div className="h-full lg:flex flex-col items-center justify center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-4xl mb-10">Sign Up</h1>
                    <div className="flex items-center justify-center mt-10">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
  ); 
}