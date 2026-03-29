import { useState } from 'react';
import {
  Home, CalendarDays, TrendingUp, Users, UserCircle,
  Bell, ChevronRight, Star, Clock, MapPin, BookOpen,
  MessageCircle, Award, CheckCircle2, Circle, LogOut,
  Phone, Mail, ArrowRight, Waves
} from 'lucide-react';

/* ── Demo data ── */
const PARENT = {
  name: 'Carlos Mendoza',
  email: 'carlos.mendoza@email.com',
  phone: '+51 987 654 321',
  avatar: 'CM',
  member: 'Since Jan 2024',
};

const KIDS = [
  {
    id: 'sofia',
    name: 'Sofía',
    age: 7,
    program: 'Kids Swim Lessons',
    level: 'Beginner → Intermediate',
    instructor: 'Ana Torres',
    sessions: 18,
    color: 'from-[#023e8a] to-[#0077b6]',
    lightColor: 'bg-blue-50',
    accent: 'text-[#023e8a]',
    border: 'border-[#023e8a]',
    avatar: '🏊‍♀️',
    progress: 72,
    skills: ['Floating', 'Kicking', 'Breathing', 'Freestyle basics'],
    pendingSkills: ['Backstroke', 'Turns'],
    nextClass: { date: 'Wed, Apr 2', time: '4:00 PM', lane: 'Lane 3', instructor: 'Ana Torres' },
    upcomingClasses: [
      { date: 'Wed, Apr 2', time: '4:00 PM', status: 'upcoming' },
      { date: 'Fri, Apr 4', time: '4:00 PM', status: 'upcoming' },
      { date: 'Mon, Apr 7', time: '4:00 PM', status: 'upcoming' },
    ],
    recentClasses: [
      { date: 'Mon, Mar 24', time: '4:00 PM', status: 'attended', note: 'Great progress on freestyle!' },
      { date: 'Wed, Mar 26', time: '4:00 PM', status: 'attended', note: 'Working on breathing rhythm.' },
      { date: 'Fri, Mar 28', time: '4:00 PM', status: 'missed', note: '' },
    ],
    instructorNote: 'Sofía is progressing wonderfully! She has great water confidence and is ready to start backstroke next month.',
  },
  {
    id: 'mateo',
    name: 'Mateo',
    age: 4,
    program: 'Babies & Toddlers',
    level: 'Starter',
    instructor: 'Ana Torres',
    sessions: 7,
    color: 'from-[#0096c7] to-[#00b4d8]',
    lightColor: 'bg-sky-50',
    accent: 'text-[#0096c7]',
    border: 'border-[#0096c7]',
    avatar: '👶',
    progress: 38,
    skills: ['Water comfort', 'Blowing bubbles'],
    pendingSkills: ['Floating', 'Kicking', 'Submersion'],
    nextClass: { date: 'Thu, Apr 3', time: '9:00 AM', lane: 'Lane 2', instructor: 'Ana Torres' },
    upcomingClasses: [
      { date: 'Thu, Apr 3', time: '9:00 AM', status: 'upcoming' },
      { date: 'Thu, Apr 10', time: '9:00 AM', status: 'upcoming' },
      { date: 'Thu, Apr 17', time: '9:00 AM', status: 'upcoming' },
    ],
    recentClasses: [
      { date: 'Thu, Mar 20', time: '9:00 AM', status: 'attended', note: 'Loves the water!' },
      { date: 'Thu, Mar 27', time: '9:00 AM', status: 'attended', note: 'Started blowing bubbles.' },
    ],
    instructorNote: "Mateo is adapting really well. He's fearless in the water — that's a great start! We'll focus on floating next.",
  },
];

/* ── Navigation ── */
const NAV = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'classes', icon: CalendarDays, label: 'Classes' },
  { id: 'progress', icon: TrendingUp, label: 'Progress' },
  { id: 'family', icon: Users, label: 'Family' },
  { id: 'profile', icon: UserCircle, label: 'Profile' },
];

/* ── Helpers ── */
function KidPill({ kid, active, onClick }: { kid: typeof KIDS[0]; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-150 ${
        active
          ? `bg-gradient-to-r ${kid.color} text-white shadow-md`
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <span>{kid.avatar}</span>
      {kid.name}
    </button>
  );
}

function ClassStatusDot({ status }: { status: string }) {
  if (status === 'attended') return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
  if (status === 'missed') return <Circle className="w-4 h-4 text-red-400" />;
  return <Clock className="w-4 h-4 text-[#0077b6]" />;
}

/* ── Main Component ── */
export default function ClientDashboard() {
  const [tab, setTab] = useState('home');
  const [activeKid, setActiveKid] = useState(0);

  const kid = KIDS[activeKid];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">

      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#023e8a] to-[#00b4d8] flex items-center justify-center">
            <Waves className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-tight">H2GO Portal</p>
            <p className="text-gray-400 text-xs">Client Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="w-9 h-9 rounded-full bg-[#023e8a] text-white text-xs font-bold flex items-center justify-center">CM</div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-lg mx-auto px-4 py-5 space-y-5">

          {/* ── HOME ── */}
          {tab === 'home' && (
            <>
              {/* Greeting */}
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Hi, Carlos! 👋</h1>
                <p className="text-gray-500 text-sm mt-0.5">Here's what's happening with your swimmers.</p>
              </div>

              {/* Kid switcher */}
              <div className="flex gap-2">
                {KIDS.map((k, i) => (
                  <KidPill key={k.id} kid={k} active={activeKid === i} onClick={() => setActiveKid(i)} />
                ))}
              </div>

              {/* Next class card */}
              <div className={`rounded-3xl bg-gradient-to-br ${kid.color} p-5 text-white shadow-lg`}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/80 text-sm font-medium">Next Class · {kid.name}</p>
                  <span className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Upcoming</span>
                </div>
                <h2 className="text-xl font-extrabold mb-1">{kid.program}</h2>
                <div className="flex items-center gap-4 mt-3 text-sm text-white/90">
                  <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />{kid.nextClass.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{kid.nextClass.time}</span>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-white/90">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{kid.nextClass.lane}</span>
                  <span className="flex items-center gap-1.5"><UserCircle className="w-4 h-4" />{kid.nextClass.instructor}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-xs">Progress to next level</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-32 bg-white/25 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: `${kid.progress}%` }} />
                      </div>
                      <span className="text-white text-xs font-bold">{kid.progress}%</span>
                    </div>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
                    View details
                  </button>
                </div>
              </div>

              {/* Quick actions */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: BookOpen, label: 'Book a Class', sub: 'Reserve your spot', color: 'bg-[#023e8a]', href: '/booking' },
                    { icon: TrendingUp, label: 'View Progress', sub: `${kid.name}'s milestones`, color: 'bg-[#0077b6]', action: () => setTab('progress') },
                    { icon: MessageCircle, label: 'Message Coach', sub: 'Chat with Ana', color: 'bg-[#0096c7]', action: () => {} },
                    { icon: Award, label: 'Certificates', sub: '1 earned', color: 'bg-[#00b4d8]', action: () => {} },
                  ].map((a, i) => (
                    <button
                      key={i}
                      onClick={a.action ?? undefined}
                      {...(a.href ? { onClick: () => window.location.href = a.href } : {})}
                      className="bg-white rounded-2xl p-4 text-left border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 group"
                    >
                      <div className={`w-10 h-10 rounded-xl ${a.color} flex items-center justify-center mb-3`}>
                        <a.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="font-bold text-gray-900 text-sm">{a.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{a.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Instructor note */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#023e8a]/10 text-[#023e8a] font-bold text-xs flex items-center justify-center">AT</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Ana Torres</p>
                    <p className="text-xs text-gray-400">Coach note · {kid.name}</p>
                  </div>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 ml-auto" />
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">"{kid.instructorNote}"</p>
              </div>

              {/* Both kids at a glance */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Your Swimmers</h3>
                <div className="space-y-3">
                  {KIDS.map((k, i) => (
                    <div key={k.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${k.color} flex items-center justify-center text-2xl`}>{k.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900">{k.name} <span className="font-normal text-gray-400 text-sm">· {k.age} yrs</span></p>
                        <p className="text-xs text-gray-500 truncate">{k.program} · {k.level}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                            <div className={`h-1.5 rounded-full bg-gradient-to-r ${k.color}`} style={{ width: `${k.progress}%` }} />
                          </div>
                          <span className="text-xs font-semibold text-gray-600">{k.progress}%</span>
                        </div>
                      </div>
                      <button onClick={() => { setActiveKid(i); setTab('progress'); }} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── CLASSES ── */}
          {tab === 'classes' && (
            <>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Classes</h1>
                <p className="text-gray-500 text-sm mt-0.5">Upcoming and past sessions.</p>
              </div>

              <div className="flex gap-2">
                {KIDS.map((k, i) => (
                  <KidPill key={k.id} kid={k} active={activeKid === i} onClick={() => setActiveKid(i)} />
                ))}
              </div>

              {/* Upcoming */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-[#0077b6]" /> Upcoming Classes
                </h3>
                <div className="space-y-3">
                  {kid.upcomingClasses.map((c, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kid.color} flex items-center justify-center shrink-0`}>
                        <CalendarDays className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm">{kid.program}</p>
                        <p className="text-xs text-gray-500">{c.date} · {c.time}</p>
                        <p className="text-xs text-gray-400">Instructor: {kid.instructor}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#0077b6] bg-blue-50 px-2.5 py-1 rounded-full shrink-0">Booked</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Past */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" /> Past Classes
                </h3>
                <div className="space-y-3">
                  {kid.recentClasses.map((c, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
                      <ClassStatusDot status={c.status} />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm">{kid.program}</p>
                        <p className="text-xs text-gray-500">{c.date} · {c.time}</p>
                        {c.note && <p className="text-xs text-gray-500 mt-1 italic">"{c.note}"</p>}
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                        c.status === 'attended' ? 'text-emerald-700 bg-emerald-50' : 'text-red-600 bg-red-50'
                      }`}>
                        {c.status === 'attended' ? 'Attended' : 'Missed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/booking" className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-[#023e8a] to-[#0077b6] text-white font-bold shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all">
                <BookOpen className="w-5 h-5" /> Book Another Class
              </a>
            </>
          )}

          {/* ── PROGRESS ── */}
          {tab === 'progress' && (
            <>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Progress</h1>
                <p className="text-gray-500 text-sm mt-0.5">Skills and milestones.</p>
              </div>

              <div className="flex gap-2">
                {KIDS.map((k, i) => (
                  <KidPill key={k.id} kid={k} active={activeKid === i} onClick={() => setActiveKid(i)} />
                ))}
              </div>

              {/* Level card */}
              <div className={`bg-gradient-to-br ${kid.color} rounded-3xl p-5 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{kid.avatar}</span>
                  <div>
                    <h2 className="font-extrabold text-xl">{kid.name}</h2>
                    <p className="text-white/80 text-sm">{kid.program}</p>
                  </div>
                </div>
                <div className="bg-white/15 rounded-2xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white/90 text-sm font-semibold">Level Progress</p>
                    <p className="text-white font-bold">{kid.progress}%</p>
                  </div>
                  <div className="w-full bg-white/25 rounded-full h-3">
                    <div className="bg-white h-3 rounded-full transition-all" style={{ width: `${kid.progress}%` }} />
                  </div>
                  <p className="text-white/70 text-xs mt-2">{kid.level} · {kid.sessions} sessions completed</p>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4">Skills Mastered</h3>
                <div className="space-y-2.5">
                  {kid.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <p className="text-sm font-medium text-gray-800">{skill}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-500 mb-2.5">Coming Up Next</p>
                  <div className="space-y-2.5">
                    {kid.pendingSkills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Circle className="w-5 h-5 text-gray-300 shrink-0" />
                        <p className="text-sm font-medium text-gray-400">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coach note */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Instructor Note</p>
                <p className="text-sm text-gray-700 italic leading-relaxed">"{kid.instructorNote}"</p>
                <p className="text-xs text-gray-400 mt-2">— {kid.instructor}</p>
              </div>

              {/* Attendance */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <h3 className="font-bold text-gray-900 mb-3">Attendance Rate</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-[#0077b6] flex items-center justify-center">
                    <span className="text-lg font-extrabold text-[#023e8a]">
                      {kid.id === 'sofia' ? '89%' : '100%'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {kid.id === 'sofia' ? '16 of 18 sessions attended' : '7 of 7 sessions attended'}
                    </p>
                    <p className="text-xs text-gray-400">Past 3 months</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── FAMILY ── */}
          {tab === 'family' && (
            <>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Family</h1>
                <p className="text-gray-500 text-sm mt-0.5">Manage your family account.</p>
              </div>

              {/* Parent card */}
              <div className="bg-gradient-to-br from-[#023e8a] to-[#0077b6] rounded-3xl p-5 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center font-bold text-xl">CM</div>
                  <div>
                    <p className="font-extrabold text-lg">{PARENT.name}</p>
                    <p className="text-white/75 text-sm">Parent / Guardian · {PARENT.member}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Mail className="w-4 h-4" />{PARENT.email}
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Phone className="w-4 h-4" />{PARENT.phone}
                  </div>
                </div>
              </div>

              {/* Kids */}
              <h3 className="font-bold text-gray-900 -mb-1">Registered Swimmers</h3>
              {KIDS.map((k, i) => (
                <div key={k.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className={`bg-gradient-to-r ${k.color} px-5 py-4 flex items-center gap-3`}>
                    <span className="text-3xl">{k.avatar}</span>
                    <div>
                      <p className="font-extrabold text-white text-lg">{k.name}</p>
                      <p className="text-white/80 text-xs">{k.age} years old · {k.program}</p>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level</span>
                      <span className="font-semibold text-gray-900">{k.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Instructor</span>
                      <span className="font-semibold text-gray-900">{k.instructor}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Sessions Done</span>
                      <span className="font-semibold text-gray-900">{k.sessions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Next Class</span>
                      <span className="font-semibold text-gray-900">{k.nextClass.date} · {k.nextClass.time}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Overall Progress</span><span>{k.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className={`h-2 rounded-full bg-gradient-to-r ${k.color}`} style={{ width: `${k.progress}%` }} />
                      </div>
                    </div>
                    <button
                      onClick={() => { setActiveKid(i); setTab('progress'); }}
                      className="w-full py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-[#0077b6] hover:text-[#0077b6] transition-colors flex items-center justify-center gap-2"
                    >
                      View Full Profile <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <button className="w-full py-3.5 rounded-2xl border-2 border-dashed border-gray-300 text-gray-500 font-semibold text-sm hover:border-[#0077b6] hover:text-[#0077b6] transition-colors">
                + Add Another Swimmer
              </button>
            </>
          )}

          {/* ── PROFILE ── */}
          {tab === 'profile' && (
            <>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">My Profile</h1>
                <p className="text-gray-500 text-sm mt-0.5">Account and preferences.</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#023e8a] to-[#0077b6] text-white font-extrabold text-xl flex items-center justify-center">CM</div>
                  <div>
                    <p className="font-extrabold text-gray-900 text-lg">{PARENT.name}</p>
                    <p className="text-gray-400 text-sm">Parent Account</p>
                    <p className="text-xs text-gray-400 mt-0.5">{PARENT.member}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Email', value: PARENT.email, icon: Mail },
                    { label: 'Phone', value: PARENT.phone, icon: Phone },
                    { label: 'Children', value: `${KIDS.length} registered swimmers`, icon: Users },
                  ].map((row, i) => {
                    const Icon = row.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                        <Icon className="w-4 h-4 text-gray-400 shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs text-gray-400">{row.label}</p>
                          <p className="text-sm font-semibold text-gray-800">{row.value}</p>
                        </div>
                        <button className="text-xs text-[#0077b6] font-semibold">Edit</button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
                {[
                  { label: 'Notifications', sub: 'Class reminders & updates' },
                  { label: 'Language', sub: 'English / Español' },
                  { label: 'Payment Methods', sub: '1 card on file' },
                  { label: 'Help & Support', sub: 'FAQs and contact' },
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                      <p className="text-xs text-gray-400">{item.sub}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>

              <a href="/login" className="flex items-center gap-2 w-full py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-sm justify-center hover:border-red-300 hover:text-red-500 transition-colors">
                <LogOut className="w-4 h-4" /> Sign Out
              </a>
            </>
          )}

        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 pb-safe">
        <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-2">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isActive = tab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-150 ${
                  isActive ? 'text-[#023e8a]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-[#023e8a]/10' : ''}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-semibold ${isActive ? 'text-[#023e8a]' : ''}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
