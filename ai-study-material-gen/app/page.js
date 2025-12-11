import Image from "next/image";
import { Button } from "../components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
     <div>
      <h2>hello</h2>
      <Button>search</Button>

      <UserButton/> 
     </div>
  );
}
