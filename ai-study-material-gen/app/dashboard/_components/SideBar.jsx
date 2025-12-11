"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress"; // file you'll create
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";

function SideBar() {
  const MenuList = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Upgrade", icon: Shield, path: "/dashboard/upgrade" },
    { name: "Profile", icon: UserCircle, path: "/dashboard/profile" },
  ];

  const path = usePathname();

  return (
    <aside className="h-screen shadow-md p-5 flex flex-col justify-between">
      <div>
        <div className="flex gap-2 items-center">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="font-bold text-2xl">Easy Study</h2>
        </div>

        <div className="mt-5">
          <Button className="w-full">Create New</Button>
        </div>

        <nav className="mt-6">
          {MenuList.map((menu, index) => {
            const Icon = menu.icon;
            const isActive = path === menu.path;
            return (
              <Link key={index} href={menu.path} className="block">
                <div
                  className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg mt-3 ${
                    isActive ? "bg-slate-200" : ""
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <h2>{menu.name}</h2>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-6 border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[90%]">
        <h2 className="font-medium mb-2">Available Credits : 5</h2>
        <Progress value={30} />
        <h2 className="text-sm mt-2">1 out of 5 Credits Used</h2>

        <div className="mt-3">
          <Link href={"/dashboard/upgrade"} className="text-primary text-xs">
            Upgrade to create more
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
