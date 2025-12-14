"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, Award, Briefcase } from "lucide-react";

const navItems = [
  { href: "/admin", icon: Home, label: "Dashboard" },
  { href: "/admin/projects", icon: Package, label: "Projects" },
  { href: "/admin/certificates", icon: Award, label: "Certificates" },
  { href: "/admin/portfolio", icon: Briefcase, label: "Portfolio" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 font-semibold">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50 ${
              isActive ? "bg-purple-600 text-white" : ""
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
