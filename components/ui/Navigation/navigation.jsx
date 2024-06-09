"use client"

import { NavButton } from "../nav-button";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { useState } from "react";
import { useRouter,usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "../button";
import { UserButton,SignOutButton } from "@clerk/nextjs";

const routes = [
    {
        href: "/",
        label: "Dashboard",
    },
    {
        href: "/transactions",
        label: "Transactions",
    }
]

export const Navigation = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const isMobile = useMedia("(max-width: 1024px)", false);
    const pathname = usePathname();
    
    console.log(isMobile);

    const onClick = href => {
        router.push(href);
        setIsOpen(false);
    }

    if(isMobile) {
        return(
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button variant="outline" size="sm" className="font-normal bg-white/10 hover:bg-white/20 
                    hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent 
                    outline-none text-white focus:bg-white/30 transition">
                        <Menu className="h-4 w-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <nav className="flex flex-col gap-y-2 pt-6">

                        <div className="flex justify-center">
                            <UserButton afterSignOutUrl="/"/>
                        </div>
                        {routes.map( route => (
                            <Button
                                key={route.href}
                                variant={route.href === pathname ? "Secondary" : "ghost"}
                                onClick={() => onClick(route.href)}
                            >
                                {route.label}
                            </Button>
                        ))}
                        <SignOutButton>
                            <Button className="border-solid border-2 border-blue bg-blue-900 text-white">Sign out</Button>
                        </SignOutButton>
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }

    return(
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map( route => (
                <NavButton
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}

            <div className="ml-10">
                <UserButton showName="true" afterSignOutUrl="/"/>

                <SignOutButton>
                    <Button className="border-solid border-2 border-white bg-transparent ml-5">Sign out</Button>
                </SignOutButton>
            </div>


        </nav>
    )
}