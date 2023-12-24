"use client"
import Landing from "@/s/landing";
import RootLayout from "./layout";
import { useRouter, usePathname} from 'next/navigation'

export default function Page() {
  const router = useRouter();

  return (
<>
<RootLayout>
  <Landing/>
</RootLayout>
</>

  );
}