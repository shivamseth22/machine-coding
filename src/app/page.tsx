import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="p-2 sm:p-4 md:p-8 space-x-2 flex flex-wrap">
  <Button><Link href={"/counter"}>Counter</Link></Button>
  <Button><Link href={"/stopwatch"}>Stopwatch</Link></Button>
  <Button><Link href={"/likebutton"}>Like Button</Link></Button>
  <Button><Link href={"/starRating"}>Star Rating</Link></Button>
  <Button><Link href={"/tabs"}>Tabs</Link></Button>
  <Button><Link href={"/accordian"}>Accordian</Link></Button>
  <Button><Link href={"/traficLight"}>Trafc Light</Link></Button>
  </div>
  );
}
