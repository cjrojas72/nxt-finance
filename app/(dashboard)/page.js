import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Dashboard. This should be authenticated </h1>
      <Button variant="primary">
        Click me
      </Button>
    </>
  );
    
}