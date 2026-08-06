'use client';
import { useAuth } from '@/lib/auth';
import { LayoutDashboard, Newspaper, Briefcase, Users } from 'lucide-react';

const stats = [
  { label: 'News Articles', value: '24', icon: Newspaper, color: 'bg-blue-50 text-blue-700' },
  { label: 'Active Services', value: '6', icon: Briefcase, color: 'bg-green-50 text-green-700' },
  { label: 'Applications', value: '142', icon: LayoutDashboard, color: 'bg-yellow-50 text-yellow-700' },
  { label: 'Staff Users', value: '18', icon: Users, color: 'bg-purple-50 text-purple-700' },
];

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, {user?.fullName}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <Icon size={18} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          );
        })}
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h2 className="font-bold text-green-900 mb-2">🟢 System Status</h2>
        <p className="text-sm text-green-700">All systems operational. Database connected. API running on port 3001.</p>
      </div>
    </div>
  );
}
