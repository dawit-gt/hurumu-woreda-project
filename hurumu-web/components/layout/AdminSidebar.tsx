'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { LayoutDashboard, Newspaper, Briefcase, Building2, FileText, Users, MapPin, LogOut, Globe } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/news', label: 'News', icon: Newspaper },
  { href: '/admin/services', label: 'Services', icon: Briefcase },
  { href: '/admin/departments', label: 'Departments', icon: Building2 },
  { href: '/admin/documents', label: 'Documents', icon: FileText },
  { href: '/admin/users', label: 'Users', icon: Users, adminOnly: true },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user, logout, hasRole } = useAuth();

  return (
    <aside className="w-60 bg-green-900 text-white flex flex-col min-h-screen flex-shrink-0">
      <div className="p-5 border-b border-green-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
            <Globe size={14} />
          </div>
          <div>
            <div className="text-sm font-bold leading-tight">Hurumu Woreda</div>
            <div className="text-green-400 text-xs">Admin Portal</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.filter(item => !item.adminOnly || hasRole('ADMIN','SUPER_ADMIN')).map(item => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${active ? 'bg-green-700 text-white' : 'text-green-200 hover:bg-green-800 hover:text-white'}`}>
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-green-800">
        <div className="text-xs text-green-400 mb-2 truncate">{user?.fullName}</div>
        <div className="text-xs text-green-500 mb-3">{user?.role?.replace('_',' ')}</div>
        <button onClick={logout}
          className="flex items-center gap-2 text-green-300 hover:text-white text-sm transition w-full">
          <LogOut size={14} /> Sign out
        </button>
      </div>
    </aside>
  );
}
