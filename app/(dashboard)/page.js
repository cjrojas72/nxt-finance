import Image from "next/image";
import Header from "@/components/ui/header/header";
import { WelcomeMsg } from "@/components/ui/welcome-msg/welcome-msg";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <WelcomeMsg />
      </div>
    </>
  );
    
}
