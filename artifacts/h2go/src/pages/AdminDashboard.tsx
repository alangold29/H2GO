import { useState } from 'react';
import {
  LayoutDashboard, Users, BookOpen, GraduationCap, CalendarDays,
  CreditCard, BarChart3, Settings, LogOut, Bell, Search, ChevronDown,
  TrendingUp, TrendingDown, MoreHorizontal, CheckCircle, Clock, XCircle, Menu, X
} from 'lucide-react';

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'Students', id: 'students' },
  { icon: BookOpen, label: 'Programs', id: 'programs' },
  { icon: GraduationCap, label: 'Instructors', id: 'instructors' },
  { icon: CalendarDays, label: 'Bookings', id: 'bookings' },
  { icon: CreditCard, label: 'Payments', id: 'payments' },
  { icon: BarChart3, label: 'Reports', id: 'reports' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

const STATS = [
  { label: 'Total Students', value: '248', change: '+12 this month', up: true, color: 'bg-blue-50 text-blue-600' },
  { label: 'Active Bookings', value: '34', change: '+5 this week', up: true, color: 'bg-sky-50 text-sky-600' },
  { label: 'Monthly Revenue', value: 'S/ 12,400', change: '+8.2% vs last month', up: true, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Instructors', value: '8', change: '1 on leave', up: false, color: 'bg-violet-50 text-violet-600' },
];

const BOOKINGS = [
  { name: 'Lucía Fernández', program: 'Kids Swim', instructor: 'Ana Torres', date: 'Apr 2, 10:00 AM', status: 'confirmed' },
  { name: 'Diego Ramírez', program: 'Adult Classes', instructor: 'Carlos Ríos', date: 'Apr 2, 4:30 PM', status: 'confirmed' },
  { name: 'Valentina Cruz', program: 'Babies & Toddlers', instructor: 'Ana Torres', date: 'Apr 3, 9:00 AM', status: 'pending' },
  { name: 'Mateo López', program: 'Teen Dev.', instructor: 'Miguel Vega', date: 'Apr 3, 5:30 PM', status: 'confirmed' },
  { name: 'Camila Torres', program: 'Private Coaching', instructor: 'Sofía Mendez', date: 'Apr 4, 8:00 AM', status: 'confirmed' },
  { name: 'Sebastián Gil', program: 'Kids Swim', instructor: 'Ana Torres', date: 'Apr 4, 4:30 PM', status: 'cancelled' },
  { name: 'Isabella Mora', program: 'Adult Classes', instructor: 'Carlos Ríos', date: 'Apr 5, 6:30 PM', status: 'pending' },
  { name: 'Andrés Vega', program: 'Teen Dev.', instructor: 'Miguel Vega', date: 'Apr 5, 5:30 PM', status: 'confirmed' },
];

const TODAY_CLASSES = [
  { time: '8:00 AM', program: 'Private Coaching', instructor: 'Sofía Mendez', students: 1, lane: 'Lane 1' },
  { time: '9:00 AM', program: 'Babies & Toddlers', instructor: 'Ana Torres', students: 6, lane: 'Lane 2' },
  { time: '10:00 AM', program: 'Kids Swim Lessons', instructor: 'Ana Torres', students: 8, lane: 'Lane 3' },
  { time: '4:30 PM', program: 'Adult Classes', instructor: 'Carlos Ríos', students: 7, lane: 'Lane 1-2' },
  { time: '5:30 PM', program: 'Teen Development', instructor: 'Miguel Vega', students: 5, lane: 'Lane 3' },
  { time: '6:30 PM', program: 'Adult Classes', instructor: 'Carlos Ríos', students: 6, lane: 'Lane 1-2' },
];

const PROGRAMS = [
  { name: 'Kids Swim Lessons', enrolled: 82, capacity: 100, color: 'bg-blue-500' },
  { name: 'Adult Classes', enrolled: 64, capacity: 80, color: 'bg-sky-500' },
  { name: 'Babies & Toddlers', enrolled: 45, capacity: 60, color: 'bg-cyan-500' },
  { name: 'Teen Development', enrolled: 38, capacity: 50, color: 'bg-teal-500' },
  { name: 'Private Coaching', enrolled: 19, capacity: 20, color: 'bg-violet-500' },
];

const statusBadge = (s: string) => {
  if (s === 'confirmed') return <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full"><CheckCircle className="w-3 h-3" />Confirmed</span>;
  if (s === 'pending') return <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full"><Clock className="w-3 h-3" />Pending</span>;
  return <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded-full"><XCircle className="w-3 h-3" />Cancelled</span>;
};

export default function AdminDashboard() {
  const [active, setActive] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-60 bg-[#0a1f44] text-white flex flex-col transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:flex
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg">H</div>
          <div>
            <p className="font-bold text-lg leading-none">H2GO</p>
            <p className="text-white/50 text-xs">Admin Portal</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <p className="text-white/35 text-xs font-semibold px-5 mb-2 uppercase tracking-wider">Main Menu</p>
          {NAV.slice(0, 6).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActive(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-white/15 text-white border-r-2 border-sky-400'
                    : 'text-white/65 hover:text-white hover:bg-white/8'
                }`}
              >
                <Icon className="w-4.5 h-4.5 w-5 h-5 shrink-0" />
                {item.label}
              </button>
            );
          })}

          <p className="text-white/35 text-xs font-semibold px-5 mt-5 mb-2 uppercase tracking-wider">Admin</p>
          {NAV.slice(6).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActive(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-white/15 text-white border-r-2 border-sky-400'
                    : 'text-white/65 hover:text-white hover:bg-white/8'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t border-white/10 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center font-bold text-sm shrink-0">MA</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">María Admin</p>
              <p className="text-white/50 text-xs truncate">admin@h2go.pe</p>
            </div>
          </div>
          <a href="/login" className="mt-3 flex items-center gap-2 text-white/50 hover:text-white text-xs transition-colors">
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </a>
        </div>
      </aside>

      {/* Backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-5 py-3.5 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="font-bold text-gray-900 text-lg leading-tight">
                {NAV.find(n => n.id === active)?.label ?? 'Dashboard'}
              </h1>
              <p className="text-gray-400 text-xs">H2GO Swimming School — Admin View</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 text-sm text-gray-500">
              <Search className="w-4 h-4" />
              <span>Search...</span>
            </div>
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#023e8a] flex items-center justify-center text-white text-xs font-bold">MA</div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 overflow-y-auto p-5 lg:p-6 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <p className="text-xs font-medium text-gray-500 mb-1">{s.label}</p>
                <p className="text-2xl font-extrabold text-gray-900 mb-1">{s.value}</p>
                <div className={`inline-flex items-center gap-1 text-xs font-semibold ${s.up ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {s.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                  {s.change}
                </div>
              </div>
            ))}
          </div>

          {/* Middle row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {/* Today's classes */}
            <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">Today's Classes</h2>
                <span className="text-xs text-gray-400">Sunday, March 29</span>
              </div>
              <div className="divide-y divide-gray-50">
                {TODAY_CLASSES.map((cls, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors">
                    <div className="text-xs font-bold text-[#0077b6] w-16 shrink-0">{cls.time}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{cls.program}</p>
                      <p className="text-xs text-gray-500">{cls.instructor} · {cls.lane}</p>
                    </div>
                    <div className="shrink-0 text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-1 rounded-lg">
                      {cls.students} students
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program enrollment */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">Program Enrollment</h2>
                <p className="text-xs text-gray-400 mt-0.5">Capacity utilization</p>
              </div>
              <div className="px-5 py-4 space-y-4">
                {PROGRAMS.map((prog, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs font-medium text-gray-700 truncate max-w-[140px]">{prog.name}</p>
                      <p className="text-xs text-gray-500 shrink-0 ml-2">{prog.enrolled}/{prog.capacity}</p>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${prog.color}`}
                        style={{ width: `${(prog.enrolled / prog.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent bookings table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">Recent Bookings</h2>
              <button className="text-xs text-[#0077b6] font-semibold hover:underline">View all</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Student</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Program</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Instructor</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Date & Time</th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {BOOKINGS.map((b, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#023e8a]/10 text-[#023e8a] text-xs font-bold flex items-center justify-center shrink-0">
                            {b.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium text-gray-900 text-sm">{b.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{b.program}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm hidden md:table-cell">{b.instructor}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden lg:table-cell">{b.date}</td>
                      <td className="px-4 py-3">{statusBadge(b.status)}</td>
                      <td className="px-4 py-3">
                        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
