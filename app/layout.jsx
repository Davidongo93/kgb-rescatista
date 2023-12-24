// RootLayout.js

import { useRouter } from "next/navigation";
import ChildComponent from "./ChildComponent";

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <>
      {/* Pasa el router como prop al componente hijo */}
      <ChildComponent router={router} />
      {children}
    </>
  );
}
