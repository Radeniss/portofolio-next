import { AdminNav } from "./AdminNav";
import { LogoutButton } from "@/components/LogoutButton";
import { Search, Bell } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      <aside className="fixed h-full w-64 flex-col border-r bg-gray-900 p-4 text-white md:flex">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <AdminNav />
        <div className="mt-auto">
          <LogoutButton />
        </div>
      </aside>
      <div className="flex flex-1 flex-col md:ml-64">
        <header className="flex h-16 items-center justify-between border-b bg-white px-8 dark:bg-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-6 w-6 text-gray-500" />
            {/*  User profile icon can go here */}
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}