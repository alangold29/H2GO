import { useState } from 'react';
import {
  LayoutDashboard, CalendarDays, Users, ClipboardList,
  LogOut, Bell, ChevronDown, CheckCircle, Clock, Menu
} from 'lucide-react';

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: CalendarDays, label: 'My Schedule', id: 'schedule' },
  { icon: Users, label: 'My Students', id: 'students' },
  { icon: ClipboardList, label: 'Attendance', id: 'attendance' },
];

const TODAY_CLASSES = [
  { time: '9:00 AM', program: 'Babies & Toddlers', students: 6, lane: 'Lane 2', duration: '45 min' },
  { time: '10:00 AM', program: 'Kids Swim Lessons', students: 8, lane: 'Lane 3', duration: '60 min' },
  { time: '4:30 PM', program: 'Adult Classes', students: 7, lane: 'Lane 1-2', duration: '60 min' },
  { time: '6:30 PM', program: 'Adult Classes', students: 6, lane: 'Lane 1-2', duration: '60 min' },
];

const MY_STUDENTS = [
  { name: 'Lucía Fernández', program: 'Kids Swim', level: 'Beginner', progress: 72, sessions: 14, next: 'Apr 2' },
  { name: 'Diego Ramírez', program: 'Adult Classes', level: 'Intermediate', progress: 55, sessions: 8, next: 'Apr 2' },
  { name: 'Valentina Cruz', program: 'Babies & Toddlers', level: 'Starter', progress: 40, sessions: 5, next: 'Apr 3' },
  { name: 'Mateo López', program: 'Kids Swim', level: 'Beginner', progress: 85, sessions: 20, next: 'Apr 4' },
  { name: 'Camila Torres', program: 'Adult Classes', level: 'Advanced', progress: 90, sessions: 32, next: 'Apr 5' },
  { name: 'Isabella Mora', program: 'Adult Classes', level: 'Intermediate', progress: 63, sessions: 11, next: 'Apr 5' },
];

const ATTENDANCE = [
  { name: 'Lucía Fernández', date: 'Mar 28', status: 'present' },
  { name: 'Diego Ramírez', date: 'Mar 28', status: 'present' },
  { name: 'Valentina Cruz', date: 'Mar 28', status: 'absent' },
  { name: 'Mateo López', date: 'Mar 28', status: 'present' },
  { name: 'Camila Torres', date: 'Mar 27', status: 'present' },
  { name: 'Isabella Mora', date: 'Mar 27', status: 'late' },
];

const WEEKLY = [
  { day: 'Mon', classes: 3 },
  { day: 'Tue', classes: 2 },
  { day: 'Wed', classes: 3 },
  { day: 'Thu', classes: 2 },
  { day: 'Fri', classes: 1 },
  { day: 'Sat', classes: 4 },
  { day: 'Sun', classes: 2 },
];

const attendanceBadge = (s: string) => {
  if (s === 'present') return <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Present</span>;
  if (s === 'late') return <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Late</span>;
  return <span className="text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded-full">Absent</span>;
};

export default function StaffDashboard() {
  const [active, setActive] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const maxClasses = Math.max(...WEEKLY.map(w => w.classes));

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-56 bg-[#0a3d6b] text-white flex flex-col transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:flex
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-bold text-lg">H</div>
          <div>
            <p className="font-bold text-lg leading-none">H2GO</p>
            <p className="text-white/50 text-xs">Staff Portal</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4">
          <p className="text-white/35 text-xs font-semibold px-5 mb-2 uppercase tracking-wider">Navigation</p>
          {NAV.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActive(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-white/15 text-white border-r-2 border-sky-300'
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
            <div className="w-9 h-9 rounded-full bg-sky-400 flex items-center justify-center font-bold text-sm shrink-0">AT</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Ana Torres</p>
              <p className="text-white/50 text-xs truncate">Instructor</p>
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

      {/* Main */}
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
              <p className="text-gray-400 text-xs">Staff Portal — Ana Torres</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#0a3d6b] flex items-center justify-center text-white text-xs font-bold">AT</div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="flex-1 overflow-y-auto p-5 lg:p-6 space-y-6">

          {/* Quick stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Today's Classes", value: '4', sub: '27 total students' },
              { label: 'My Students', value: '34', sub: '3 new this month' },
              { label: 'Avg Attendance', value: '91%', sub: 'Last 30 days' },
              { label: 'This Week', value: '17', sub: 'Classes scheduled' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <p className="text-xs font-medium text-gray-500 mb-1">{s.label}</p>
                <p className="text-2xl font-extrabold text-gray-900 mb-1">{s.value}</p>
                <p className="text-xs text-gray-400">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {/* Today's schedule */}
            <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">Today's Schedule</h2>
                <span className="text-xs font-semibold text-[#0077b6] bg-blue-50 px-2.5 py-1 rounded-full">
                  {TODAY_CLASSES.length} classes
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {TODAY_CLASSES.map((cls, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3.5">
                    <div className="w-2 h-2 rounded-full bg-[#0077b6] shrink-0" />
                    <div className="text-xs font-bold text-[#0077b6] w-16 shrink-0">{cls.time}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800">{cls.program}</p>
                      <p className="text-xs text-gray-500">{cls.lane} · {cls.duration}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-lg shrink-0">
                      <Users className="w-3 h-3" />
                      {cls.students}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">Weekly Overview</h2>
                <p className="text-xs text-gray-400 mt-0.5">Classes per day</p>
              </div>
              <div className="px-5 py-5">
                <div className="flex items-end gap-2 h-28">
                  {WEEKLY.map((w) => (
                    <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold text-gray-600">{w.classes}</span>
                      <div
                        className="w-full rounded-t-lg bg-[#0077b6]/80"
                        style={{ height: `${(w.classes / maxClasses) * 80}px` }}
                      />
                      <span className="text-xs text-gray-400">{w.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Students + Attendance */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {/* My students */}
            <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">My Students</h2>
                <button className="text-xs text-[#0077b6] font-semibold hover:underline">View all</button>
              </div>
              <div className="divide-y divide-gray-50">
                {MY_STUDENTS.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#0a3d6b]/10 text-[#0a3d6b] text-xs font-bold flex items-center justify-center shrink-0">
                      {s.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.program} · {s.level}</p>
                    </div>
                    <div className="hidden sm:block w-24">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Progress</span><span>{s.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-[#0077b6]" style={{ width: `${s.progress}%` }} />
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-gray-500">{s.sessions} sessions</p>
                      <p className="text-xs text-[#0077b6] font-medium">Next: {s.next}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent attendance */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-gray-900">Recent Attendance</h2>
                <p className="text-xs text-gray-400 mt-0.5">Last 2 sessions</p>
              </div>
              <div className="divide-y divide-gray-50">
                {ATTENDANCE.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3">
                    <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center shrink-0">
                      {a.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 truncate">{a.name}</p>
                      <p className="text-xs text-gray-400">{a.date}</p>
                    </div>
                    {attendanceBadge(a.status)}
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 border-t border-gray-100">
                <button className="w-full py-2 rounded-xl bg-[#0a3d6b] text-white text-sm font-semibold hover:bg-[#023e8a] transition-colors flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Mark Today's Attendance
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
