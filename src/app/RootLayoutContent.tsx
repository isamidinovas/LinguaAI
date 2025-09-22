"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function RootLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  return (
    <>
      {!isAuthPage && <Sidebar />}
      <div className="flex-1">
        {!isAuthPage && <Navbar />}
        <main className={!isAuthPage ? "pt-16" : undefined}>{children}</main>
      </div>
    </>
  );
}
