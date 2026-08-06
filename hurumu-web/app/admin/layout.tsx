"use client";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) router.replace("/auth/login");
  }, [isAuthenticated, loading, router]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">Admin Portal</div>
        <button
          type="button"
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
        >
          {sidebarOpen ? "Close menu" : "Open menu"}
        </button>
      </div>
      <div className="lg:flex">
        <aside className="lg:block">
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <div
            className={`fixed inset-y-0 left-0 z-40 w-full max-w-xs bg-white shadow-xl lg:static lg:shadow-none lg:max-w-none lg:w-60 ${sidebarOpen ? "block" : "hidden"} lg:block`}
          >
            <AdminSidebar />
          </div>
        </aside>
        <main className="flex-1 p-6 lg:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
