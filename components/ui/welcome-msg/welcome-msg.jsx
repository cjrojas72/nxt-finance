"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () =>{
    const { user, isLoaded } = useUser();

    return(
        <div className="space-y-2 m-4">
            <h2 className="text-2xl lg:text-4xl font medium">
                Welcome Back {user?.firstName}
            </h2>
        </div>
    )
}