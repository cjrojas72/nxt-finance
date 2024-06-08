import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>Dashboard. This should be authenticated </h1>
      <SignOutButton>
        <Button variant="outline">Sign out</Button>
      </SignOutButton>
    </>
  );
    
}
