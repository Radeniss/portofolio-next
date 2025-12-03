import Link from "next/link";
import { Home, Package } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden w-64 flex-col border-r bg-gray-100/40 p-4 dark:bg-gray-800/40 md:flex">
        <nav className="flex flex-col gap-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/projects"
            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
          >
            <Package className="h-4 w-4" />
            Projects
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
