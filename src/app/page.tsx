import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="p-2 sm:p-4 md:p-8">
  <Button><Link href={"/counter"}>Counter</Link></Button>
  </div>
  );
}
