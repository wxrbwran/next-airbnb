import Navbar from "@/components/navbar/Navbar";

import ToasterProvider from "@/providers/ToasterProvider";
import ModalsProvider from "../providers/ModalsProvider";

import "./globals.css";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="zh-CN">
      <body className="">
        <ClientOnly>
          <ToasterProvider />
          <ModalsProvider />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
