import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return(
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-1">
            <div className="h-full lg:flex flex-col items-center justify center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl">NXTJS Finance</h1>
                    <div className="flex items-center justify-center mt-10">
                        <SignIn />
                    </div>
                </div>
            </div>
        </div>
    ); 
}